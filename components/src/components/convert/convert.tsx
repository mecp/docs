import { Component, Element, h, Prop, State } from '@stencil/core';

import CodeMirror from "codemirror";

import "codemirror/mode/javascript/javascript";
import "codemirror/mode/yaml/yaml";
import "codemirror/mode/ruby/ruby";

export interface CannedExample {
    name: string;
    filename: string;
    description: string,
    code: string;
}

interface SupportedLanguage {
    key: string;
    name: string;
    filename: string;
}

// interface ConvertResult {
//     [filename: string]: string;
// }

export type ConvertSourceKind = "tf" | "k8s" | "arm";
export type EditorLanguage = "hcl" | "json" | "yaml";
@Component({
    tag: "pulumi-convert",
    styleUrl: "./convert.scss",
    shadow: false
})
export class Convert {

    @Prop()
    from: ConvertSourceKind;

    @Prop()
    endpoint: string;

    @Prop()
    examples: string;
    _examples: CannedExample[];

    @Element()
    el: HTMLElement;

    @State()
    fetching: boolean = false;

    inputEditor: CodeMirror.EditorFromTextArea;
    outputEditor: CodeMirror.EditorFromTextArea;

    selectedExample: CannedExample;
    selectedLanguage: SupportedLanguage;

    supportedLanguages: SupportedLanguage[] = [
        { key: "typescript", name: "TypeScript", filename: "index.ts" },
        { key: "python", name: "Python", filename: "__main__.py" },
        { key: "go", name: "Go", filename: "main.go", },
        { key: "csharp", name: "C#", filename: "MyStack.cs" },
    ];

    componentDidLoad() {
        this.prepareEditors();
        this.loadExamples();

        if (this._examples && this._examples.length) {
            this.selectLanguage(this.supportedLanguages[0]);
            this.selectExample(this._examples[0]);
            this.submit();
        }
    }

    private get inputEditorEl() {
        return (this.el.querySelector("#editor-input") as HTMLTextAreaElement);
    }

    private get outputEditorEl() {
        return (this.el.querySelector("#editor-output") as HTMLTextAreaElement);
    }

    // private get outputLangEl() {
    //     return (this.el.querySelector("#code-output-language") as HTMLTextAreaElement);
    // }

    private setOutput(_filename: string, value: string) {
        this.outputEditor.setValue(value);
    }

    private selectExample(example: CannedExample) {
        this.selectedExample = example;
        this.inputEditor.setValue(example.code);
    }

    private selectLanguage(language: SupportedLanguage) {
        this.selectedLanguage = language;
    }

    private selectLanguageTab(language: SupportedLanguage) {
        this.selectLanguage(language);
        this.submit();
    }

    private onExample(event: Event) {
        this.selectExample(this._examples[(event.target as HTMLSelectElement).selectedIndex]);
        this.submit();
    }

    private async fetchResult(code: string, language: SupportedLanguage) {

        // Clear the editor.
        this.outputEditor.setValue("");

        this.fetching = true;

        try {
            const response = await fetch(`${this.endpoint}/${this.endpointPath}`, {
                method: "POST",
                mode: "cors",
                body: JSON.stringify({
                    code,
                    language: language.key,
                }),
            });

            // TODO: Type the result.
            const result: any = await response.json();
            const filenames = Object.keys(result.files);
            const filename = filenames[0];

            if (filename) {
                this.setOutput(filename, result.files[filename]);
            }
        }
        catch(e) {
            console.error(e);
        }

        this.fetching = false;
    }

    private prepareEditors() {

        const options = {
            lineNumbers: true,
            theme: "material",
        };

        this.inputEditor = CodeMirror.fromTextArea(this.inputEditorEl, {
            ...options,
            mode: this.inputEditorMode,
        });

        this.outputEditor = CodeMirror.fromTextArea(this.outputEditorEl, {
            ...options,
            readOnly: true,
        });

        // this.inputEditor.on("blur", (_event) => {
        //     this.submit();
        // });
    }

    private loadExamples() {
        if (this.examples) {
            try {
                this._examples = JSON.parse(this.examples);
            }
            catch(error) {
                this._examples = [];
                console.error("Failed to load examples:", error);
            }
        }
    }

    private submit() {
        this.fetchResult(this.inputEditor.getValue(), this.selectedLanguage);
    }

    private get inputEditorMode(): string {
        switch (this.from) {
            case "tf":
                return "ruby";
            case "k8s":
                return "yaml";
            case "arm":
                return "json";
        }
    }

    private get endpointPath(): string {
        switch (this.from) {
            case "tf":
                return "convert";
            case "arm":
                return "convertARM";
            case "k8s":
                return "convertKube";
        }
    }

    private get ideChrome() {
        return <div class="bg-gray-400 rounded-t">
            <div class="flex p-3">
                <div class="bg-red-600 rounded-full h-3 w-3"></div>
                <div class="bg-yellow-600 rounded-full h-3 w-3 mx-2"></div>
                <div class="bg-green-600 rounded-full h-3 w-3"></div>
            </div>
        </div>;
    }

    private get ideStatusBar() {
        return <div class="h-3 bg-blue-800 rounded-b">

        </div>;
    }

    private get examplesSelector() {
        if (this._examples && this._examples.length > 0) {
            return <select onChange={ this.onExample.bind(this) }>
                { this._examples.map(example => <option>{ example.name }</option>) }
            </select>
        }
    }

    render() {
        return (
            <div>
                <div id="editors">
                    <div>
                        <div class="shadow-lg">
                            { this.ideChrome }
                            { this.selectedExample
                                ?
                                    <ul class="bg-black shadow-md p-0 flex items-center overflow-hidden">
                                        <li class="p-2 my-0 flex items-center text-sm cursor-pointer bg-gray-900">
                                            <span class="mx-2 font-body text-gray-500">{ this.selectedExample.filename }</span>
                                            <span class=" ml-1 mr-2 bg-orange-300 rounded-full h-2 w-2 hidden md:block">&bull;</span>
                                        </li>
                                    </ul>
                                :
                                    <div></div>
                            }
                            <div>
                                <textarea id="editor-input"></textarea>
                            </div>
                            { this.ideStatusBar }
                        </div>
                        <p>
                            Or choose an example:
                        </p>
                        <p>
                            { this.examplesSelector }
                        </p>
                    </div>
                    <div>
                        <button class="btn btn-primary md:mx-4" onClick={ this.submit.bind(this) }>Convert!</button>
                    </div>
                    <div class="relative">
                        { this.ideChrome }
                        <ul class="bg-black shadow-md p-0 flex items-center overflow-hidden">
                            {
                                this.supportedLanguages.map(language => <li onClick={ this.selectLanguageTab.bind(this, language) } class={ "p-2 my-0 flex items-center text-sm cursor-pointer " + (this.selectedLanguage === language ? "bg-gray-900" : "bg-black") }  >
                                    <span class="mx-2 font-body text-gray-500">{ language.filename }</span>
                                    <span class={ "ml-1 mr-2 rounded-full h-2 w-2 md:block " + (this.selectedLanguage === language ? "bg-orange-300" : "bg-transparent") }></span>
                                </li>)
                            }
                        </ul>
                        <div>
                            <textarea id="editor-output"></textarea>
                        </div>
                        { this.ideStatusBar }
                        { this.fetching ? <div class="fetching visible"></div> : <div></div> }
                    </div>
                </div>
            </div>
        );
    }
}
