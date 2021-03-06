---
title: "Module lex"
title_tag: "Module lex | Package @pulumi/aws | Node.js SDK"
linktitle: "lex"
meta_desc: "Explore members of the lex module in the @pulumi/aws package."
git_sha: "666638557408d978cfe3b6ef8de5bd64ccda6273"
block_external_search_index: true
---

<!-- WARNING: this page was generated by a tool. Do not edit it by hand. -->
<!-- To change it, please see https://github.com/pulumi/docs/tree/master/tools/tscdocgen. -->

{{< resource-docs-alert "aws" >}}




<h3>Resources</h3>
<ul class="api">
    <li><a href="#SlotType"><span class="symbol resource"></span>SlotType</a></li>
</ul>

<h3>Functions</h3>
<ul class="api">
    <li><a href="#getSlotType"><span class="symbol function"></span>getSlotType</a></li>
</ul>

<h3>Others</h3>
<ul class="api">
    <li><a href="#GetSlotTypeArgs"><span class="symbol api"></span>GetSlotTypeArgs</a></li>
    <li><a href="#GetSlotTypeResult"><span class="symbol api"></span>GetSlotTypeResult</a></li>
    <li><a href="#SlotTypeArgs"><span class="symbol api"></span>SlotTypeArgs</a></li>
    <li><a href="#SlotTypeState"><span class="symbol api"></span>SlotTypeState</a></li>
</ul>


<h2 id="resources">Resources</h2>
<h3 class="pdoc-module-header" id="SlotType" data-link-title="SlotType">
    <a href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L42">
        Resource <strong>SlotType</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>class</span> <span class='nx'>SlotType</span> <span class='kr'>extends</span> <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResource'>CustomResource</a></code></pre>

Provides an Amazon Lex Slot Type resource. For more information see
[Amazon Lex: How It Works](https://docs.aws.amazon.com/lex/latest/dg/how-it-works.html)

#### Example Usage

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const flowerTypes = new aws.lex.SlotType("flower_types", {
    createVersion: false,
    description: "Types of flowers to order",
    enumerationValues: [
        {
            synonyms: [
                "Lirium",
                "Martagon",
            ],
            value: "lilies",
        },
        {
            synonyms: [
                "Eduardoregelia",
                "Podonix",
            ],
            value: "tulips",
        },
    ],
    valueSelectionStrategy: "ORIGINAL_VALUE",
});
```

<h4 class="pdoc-member-header" id="SlotType-constructor">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L113"> <b>constructor</b></a>
</h4>


<pre class="highlight"><code><span class='kd'></span><span class='kd'>new</span> SlotType(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, args: <a href='#SlotTypeArgs'>SlotTypeArgs</a>, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>)</code></pre>


Create a SlotType resource with the given unique name, arguments, and options.

* `name` The _unique_ name of the resource.
* `args` The arguments to use to populate this resource&#39;s properties.
* `opts` A bag of options that control this resource&#39;s behavior.

<h4 class="pdoc-member-header" id="SlotType-get">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L52">method <b>get</b></a>
</h4>


<pre class="highlight"><code><span class='kd'>public static </span>get(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>pulumi.ID</a>&gt;, state?: <a href='#SlotTypeState'>SlotTypeState</a>, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>): <a href='#SlotType'>SlotType</a></code></pre>


Get an existing SlotType resource's state with the given name, ID, and optional extra
properties used to qualify the lookup.

<h4 class="pdoc-member-header" id="SlotType-getProvider">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L42">method <b>getProvider</b></a>
</h4>


<pre class="highlight"><code><span class='kd'></span>getProvider(moduleMember: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>): <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ProviderResource'>ProviderResource</a> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span></code></pre>

<h4 class="pdoc-member-header" id="SlotType-isInstance">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L63">method <b>isInstance</b></a>
</h4>


<pre class="highlight"><code><span class='kd'>public static </span>isInstance(obj: <span class='kd'><a href='https://www.typescriptlang.org/docs/handbook/basic-types.html#any'>any</a></span>): obj is SlotType</code></pre>


Returns true if the given object is an instance of SlotType.  This is designed to work even
when multiple copies of the Pulumi SDK have been loaded into the same process.

<h4 class="pdoc-member-header" id="SlotType-checksum">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L74">property <b>checksum</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>checksum: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Checksum identifying the version of the slot type that was created. The checksum is
not included as an argument because the resource will add it automatically when updating the slot type.

<h4 class="pdoc-member-header" id="SlotType-createVersion">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L79">property <b>createVersion</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>createVersion: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'>boolean</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span>&gt;;</code></pre>

Determines if a new slot type version is created when the initial resource is created and on each
update. Defaults to true.

<h4 class="pdoc-member-header" id="SlotType-createdDate">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L83">property <b>createdDate</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>createdDate: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The date when the slot type version was created.

<h4 class="pdoc-member-header" id="SlotType-description">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L87">property <b>description</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>description: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span>&gt;;</code></pre>

A description of the slot type.

<h4 class="pdoc-member-header" id="SlotType-enumerationValues">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L94">property <b>enumerationValues</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>enumerationValues: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/aws/types/output/#SlotTypeEnumerationValue'>SlotTypeEnumerationValue</a>[]&gt;;</code></pre>

A list of EnumerationValue objects that defines the values that
the slot type can take. Each value can have a list of synonyms, which are additional values that help
train the machine learning model about the values that it resolves for a slot. Attributes are
documented under enumeration_value.

<h4 class="pdoc-member-header" id="SlotType-id">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L42">property <b>id</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>ID</a>&gt;;</code></pre>

id is the provider-assigned unique ID for this managed resource.  It is set during
deployments and may be missing (undefined) during planning phases.

<h4 class="pdoc-member-header" id="SlotType-lastUpdatedDate">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L98">property <b>lastUpdatedDate</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>lastUpdatedDate: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The date when the `$LATEST` version of this slot type was updated.

<h4 class="pdoc-member-header" id="SlotType-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L102">property <b>name</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>name: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The name of the slot type. The name is not case sensitive.

<h4 class="pdoc-member-header" id="SlotType-urn">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L42">property <b>urn</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>urn: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#URN'>URN</a>&gt;;</code></pre>

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.

<h4 class="pdoc-member-header" id="SlotType-valueSelectionStrategy">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L109">property <b>valueSelectionStrategy</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>valueSelectionStrategy: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span>&gt;;</code></pre>

Determines the slot resolution strategy that Amazon Lex
uses to return slot type values. `ORIGINAL_VALUE` returns the value entered by the user if the user
value is similar to the slot value. `TOP_RESOLUTION` returns the first value in the resolution list
if there is a resolution list for the slot, otherwise null is returned.

<h4 class="pdoc-member-header" id="SlotType-version">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L113">property <b>version</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>version: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The version of the slot type.


<h2 id="functions">Functions</h2>
<h3 class="pdoc-module-header" id="getSlotType" data-link-title="getSlotType">
    <a href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/getSlotType.ts#L24">
        Function <strong>getSlotType</strong>
    </a>
</h3>


<pre class="highlight"><code><span class='kd'></span>getSlotType(args: <a href='#GetSlotTypeArgs'>GetSlotTypeArgs</a>, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#InvokeOptions'>pulumi.InvokeOptions</a>): <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise'>Promise</a>&lt;<a href='#GetSlotTypeResult'>GetSlotTypeResult</a>&gt;</code></pre>


Provides details about a specific Amazon Lex Slot Type.

#### Example Usage

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const flowerTypes = pulumi.output(aws.lex.getSlotType({
    name: "FlowerTypes",
    version: "1",
}, { async: true }));
```


<h2 id="apis">Others</h2>
<h3 class="pdoc-module-header" id="GetSlotTypeArgs" data-link-title="GetSlotTypeArgs">
    <a href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/getSlotType.ts#L41">
        interface <strong>GetSlotTypeArgs</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>GetSlotTypeArgs</span></code></pre>

A collection of arguments for invoking getSlotType.

<h4 class="pdoc-member-header" id="GetSlotTypeArgs-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/getSlotType.ts#L45">property <b>name</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

The name of the slot type. The name is case sensitive.

<h4 class="pdoc-member-header" id="GetSlotTypeArgs-version">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/getSlotType.ts#L49">property <b>version</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>version?: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

The version of the slot type.

<h3 class="pdoc-module-header" id="GetSlotTypeResult" data-link-title="GetSlotTypeResult">
    <a href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/getSlotType.ts#L55">
        interface <strong>GetSlotTypeResult</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>GetSlotTypeResult</span></code></pre>

A collection of values returned by getSlotType.

<h4 class="pdoc-member-header" id="GetSlotTypeResult-checksum">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/getSlotType.ts#L60">property <b>checksum</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>checksum: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

Checksum identifying the version of the slot type that was created. The checksum is
not included as an argument because the resource will add it automatically when updating the slot type.

<h4 class="pdoc-member-header" id="GetSlotTypeResult-createdDate">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/getSlotType.ts#L64">property <b>createdDate</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>createdDate: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

The date when the slot type version was created.

<h4 class="pdoc-member-header" id="GetSlotTypeResult-description">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/getSlotType.ts#L68">property <b>description</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>description: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

A description of the slot type.

<h4 class="pdoc-member-header" id="GetSlotTypeResult-enumerationValues">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/getSlotType.ts#L74">property <b>enumerationValues</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>enumerationValues: <a href='/docs/reference/pkg/nodejs/pulumi/aws/types/output/#GetSlotTypeEnumerationValue'>GetSlotTypeEnumerationValue</a>[];</code></pre>

A set of EnumerationValue objects that defines the values that
the slot type can take. Each value can have a set of synonyms, which are additional values that help
train the machine learning model about the values that it resolves for a slot.

<h4 class="pdoc-member-header" id="GetSlotTypeResult-id">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/getSlotType.ts#L78">property <b>id</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>id: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

The provider-assigned unique ID for this managed resource.

<h4 class="pdoc-member-header" id="GetSlotTypeResult-lastUpdatedDate">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/getSlotType.ts#L82">property <b>lastUpdatedDate</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>lastUpdatedDate: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

The date when the $LATEST version of this slot type was updated.

<h4 class="pdoc-member-header" id="GetSlotTypeResult-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/getSlotType.ts#L86">property <b>name</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

The name of the slot type. The name is not case sensitive.

<h4 class="pdoc-member-header" id="GetSlotTypeResult-valueSelectionStrategy">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/getSlotType.ts#L93">property <b>valueSelectionStrategy</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>valueSelectionStrategy: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

Determines the slot resolution strategy that Amazon Lex
uses to return slot type values. `ORIGINAL_VALUE` returns the value entered by the user if the user
value is similar to the slot value. `TOP_RESOLUTION` returns the first value in the resolution list
if there is a resolution list for the slot, otherwise null is returned.

<h4 class="pdoc-member-header" id="GetSlotTypeResult-version">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/getSlotType.ts#L97">property <b>version</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>version?: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

The version of the slot type.

<h3 class="pdoc-module-header" id="SlotTypeArgs" data-link-title="SlotTypeArgs">
    <a href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L215">
        interface <strong>SlotTypeArgs</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>SlotTypeArgs</span></code></pre>

The set of arguments for constructing a SlotType resource.

<h4 class="pdoc-member-header" id="SlotTypeArgs-createVersion">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L220">property <b>createVersion</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>createVersion?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'>boolean</a></span>&gt;;</code></pre>

Determines if a new slot type version is created when the initial resource is created and on each
update. Defaults to true.

<h4 class="pdoc-member-header" id="SlotTypeArgs-description">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L224">property <b>description</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>description?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

A description of the slot type.

<h4 class="pdoc-member-header" id="SlotTypeArgs-enumerationValues">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L231">property <b>enumerationValues</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>enumerationValues: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/aws/types/input/#SlotTypeEnumerationValue'>SlotTypeEnumerationValue</a>&gt;[]&gt;;</code></pre>

A list of EnumerationValue objects that defines the values that
the slot type can take. Each value can have a list of synonyms, which are additional values that help
train the machine learning model about the values that it resolves for a slot. Attributes are
documented under enumeration_value.

<h4 class="pdoc-member-header" id="SlotTypeArgs-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L235">property <b>name</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>name?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The name of the slot type. The name is not case sensitive.

<h4 class="pdoc-member-header" id="SlotTypeArgs-valueSelectionStrategy">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L242">property <b>valueSelectionStrategy</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>valueSelectionStrategy?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Determines the slot resolution strategy that Amazon Lex
uses to return slot type values. `ORIGINAL_VALUE` returns the value entered by the user if the user
value is similar to the slot value. `TOP_RESOLUTION` returns the first value in the resolution list
if there is a resolution list for the slot, otherwise null is returned.

<h3 class="pdoc-module-header" id="SlotTypeState" data-link-title="SlotTypeState">
    <a href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L165">
        interface <strong>SlotTypeState</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>SlotTypeState</span></code></pre>

Input properties used for looking up and filtering SlotType resources.

<h4 class="pdoc-member-header" id="SlotTypeState-checksum">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L170">property <b>checksum</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>checksum?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Checksum identifying the version of the slot type that was created. The checksum is
not included as an argument because the resource will add it automatically when updating the slot type.

<h4 class="pdoc-member-header" id="SlotTypeState-createVersion">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L175">property <b>createVersion</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>createVersion?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'>boolean</a></span>&gt;;</code></pre>

Determines if a new slot type version is created when the initial resource is created and on each
update. Defaults to true.

<h4 class="pdoc-member-header" id="SlotTypeState-createdDate">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L179">property <b>createdDate</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>createdDate?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The date when the slot type version was created.

<h4 class="pdoc-member-header" id="SlotTypeState-description">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L183">property <b>description</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>description?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

A description of the slot type.

<h4 class="pdoc-member-header" id="SlotTypeState-enumerationValues">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L190">property <b>enumerationValues</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>enumerationValues?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/aws/types/input/#SlotTypeEnumerationValue'>SlotTypeEnumerationValue</a>&gt;[]&gt;;</code></pre>

A list of EnumerationValue objects that defines the values that
the slot type can take. Each value can have a list of synonyms, which are additional values that help
train the machine learning model about the values that it resolves for a slot. Attributes are
documented under enumeration_value.

<h4 class="pdoc-member-header" id="SlotTypeState-lastUpdatedDate">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L194">property <b>lastUpdatedDate</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>lastUpdatedDate?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The date when the `$LATEST` version of this slot type was updated.

<h4 class="pdoc-member-header" id="SlotTypeState-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L198">property <b>name</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>name?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The name of the slot type. The name is not case sensitive.

<h4 class="pdoc-member-header" id="SlotTypeState-valueSelectionStrategy">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L205">property <b>valueSelectionStrategy</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>valueSelectionStrategy?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Determines the slot resolution strategy that Amazon Lex
uses to return slot type values. `ORIGINAL_VALUE` returns the value entered by the user if the user
value is similar to the slot value. `TOP_RESOLUTION` returns the first value in the resolution list
if there is a resolution list for the slot, otherwise null is returned.

<h4 class="pdoc-member-header" id="SlotTypeState-version">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/666638557408d978cfe3b6ef8de5bd64ccda6273/sdk/nodejs/lex/slotType.ts#L209">property <b>version</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>version?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The version of the slot type.

