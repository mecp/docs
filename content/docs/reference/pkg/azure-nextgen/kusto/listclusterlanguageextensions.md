
---
title: "ListClusterLanguageExtensions"
title_tag: "Function ListClusterLanguageExtensions | Module kusto | Package Azure NextGen"
meta_desc: "Explore the ListClusterLanguageExtensions function of the kusto module, including examples, input properties, output properties, and supporting types. "
---



<!-- WARNING: this file was generated by Pulumi Docs Generator. -->
<!-- Do not edit by hand unless you're certain you know what you are doing! -->




## Using ListClusterLanguageExtensions {#using}

{{< chooser language "typescript,python,go,csharp" / >}}


{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">function </span>listClusterLanguageExtensions<span class="p">(</span><span class="nx">args</span><span class="p">:</span> <span class="nx">ListClusterLanguageExtensionsArgs</span><span class="p">, </span><span class="nx">opts</span><span class="p">?:</span> <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#InvokeOptions">InvokeOptions</a></span><span class="p">): Promise&lt;<span class="nx">ListClusterLanguageExtensionsResult</span>></span></code></pre></div>
{{% /choosable %}}


{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span>list_cluster_language_extensions(</span><span class="nx">cluster_name</span><span class="p">:</span> <span class="nx">Optional[str]</span> = None<span class="p">, </span><span class="nx">resource_group_name</span><span class="p">:</span> <span class="nx">Optional[str]</span> = None<span class="p">, </span><span class="nx">opts</span><span class="p">:</span> <span class="nx"><a href="/docs/reference/pkg/python/pulumi/#pulumi.InvokeOptions">Optional[InvokeOptions]</a></span> = None<span class="p">) -&gt;</span> ListClusterLanguageExtensionsResult</code></pre></div>
{{% /choosable %}}


{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>ListClusterLanguageExtensions<span class="p">(</span><span class="nx">ctx</span><span class="p"> *</span><span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">args</span><span class="p"> *</span><span class="nx">ListClusterLanguageExtensionsArgs</span><span class="p">, </span><span class="nx">opts</span><span class="p"> ...</span><span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#InvokeOption">InvokeOption</a></span><span class="p">) (*<span class="nx">ListClusterLanguageExtensionsResult</span>, error)</span></code></pre></div>

{{% /choosable %}}


{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static class </span><span class="nx">ListClusterLanguageExtensions </span><span class="p">{</span><span class="k">
    public static </span>Task&lt;<span class="nx">ListClusterLanguageExtensionsResult</span>> <span class="p">InvokeAsync(</span><span class="nx">ListClusterLanguageExtensionsArgs</span><span class="p"> </span><span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.InvokeOptions.html">InvokeOptions</a></span><span class="p">? </span><span class="nx">opts = null<span class="p">)</span><span class="p">
}</span></code></pre></div>
{{% /choosable %}}



The following arguments are supported:



{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span id="clustername_csharp">
<a href="#clustername_csharp" style="color: inherit; text-decoration: inherit;">Cluster<wbr>Name</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the Kusto cluster.{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span id="resourcegroupname_csharp">
<a href="#resourcegroupname_csharp" style="color: inherit; text-decoration: inherit;">Resource<wbr>Group<wbr>Name</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group containing the Kusto cluster.{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span id="clustername_go">
<a href="#clustername_go" style="color: inherit; text-decoration: inherit;">Cluster<wbr>Name</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the Kusto cluster.{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span id="resourcegroupname_go">
<a href="#resourcegroupname_go" style="color: inherit; text-decoration: inherit;">Resource<wbr>Group<wbr>Name</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group containing the Kusto cluster.{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span id="clustername_nodejs">
<a href="#clustername_nodejs" style="color: inherit; text-decoration: inherit;">cluster<wbr>Name</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the Kusto cluster.{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span id="resourcegroupname_nodejs">
<a href="#resourcegroupname_nodejs" style="color: inherit; text-decoration: inherit;">resource<wbr>Group<wbr>Name</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group containing the Kusto cluster.{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span id="cluster_name_python">
<a href="#cluster_name_python" style="color: inherit; text-decoration: inherit;">cluster_<wbr>name</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the Kusto cluster.{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span id="resource_group_name_python">
<a href="#resource_group_name_python" style="color: inherit; text-decoration: inherit;">resource_<wbr>group_<wbr>name</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group containing the Kusto cluster.{{% /md %}}</dd>

</dl>
{{% /choosable %}}








## ListClusterLanguageExtensions Result {#result}

The following output properties are available:




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span id="value_csharp">
<a href="#value_csharp" style="color: inherit; text-decoration: inherit;">Value</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#languageextensionresponse">List&lt;Pulumi.<wbr>Azure<wbr>Next<wbr>Gen.<wbr>Kusto.<wbr>Outputs.<wbr>Language<wbr>Extension<wbr>Response&gt;</a></span>
    </dt>
    <dd>{{% md %}}The list of language extensions.{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span id="value_go">
<a href="#value_go" style="color: inherit; text-decoration: inherit;">Value</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#languageextensionresponse">[]Language<wbr>Extension<wbr>Response</a></span>
    </dt>
    <dd>{{% md %}}The list of language extensions.{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span id="value_nodejs">
<a href="#value_nodejs" style="color: inherit; text-decoration: inherit;">value</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#languageextensionresponse">Language<wbr>Extension<wbr>Response[]</a></span>
    </dt>
    <dd>{{% md %}}The list of language extensions.{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span id="value_python">
<a href="#value_python" style="color: inherit; text-decoration: inherit;">value</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#languageextensionresponse">List[Language<wbr>Extension<wbr>Response]</a></span>
    </dt>
    <dd>{{% md %}}The list of language extensions.{{% /md %}}</dd>

</dl>
{{% /choosable %}}








## Supporting Types


<h4 id="languageextensionresponse">Language<wbr>Extension<wbr>Response</h4>







{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span id="languageextensionname_csharp">
<a href="#languageextensionname_csharp" style="color: inherit; text-decoration: inherit;">Language<wbr>Extension<wbr>Name</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The language extension name.{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span id="languageextensionname_go">
<a href="#languageextensionname_go" style="color: inherit; text-decoration: inherit;">Language<wbr>Extension<wbr>Name</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The language extension name.{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span id="languageextensionname_nodejs">
<a href="#languageextensionname_nodejs" style="color: inherit; text-decoration: inherit;">language<wbr>Extension<wbr>Name</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The language extension name.{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span id="languageextensionname_python">
<a href="#languageextensionname_python" style="color: inherit; text-decoration: inherit;">language<wbr>Extension<wbr>Name</a>
</span> 
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The language extension name.{{% /md %}}</dd>

</dl>
{{% /choosable %}}









<h2 id="package-details">Package Details</h2>
<dl class="package-details">
	<dt>Repository</dt>
	<dd><a href="https://github.com/pulumi/pulumi-azure-nextgen">https://github.com/pulumi/pulumi-azure-nextgen</a></dd>
	<dt>License</dt>
	<dd>Apache-2.0</dd>
</dl>

