---
title: "Module apiextensions/v1beta1"
title_tag: "Module apiextensions/v1beta1 | Package @pulumi/kubernetes | Node.js SDK"
linktitle: "v1beta1"
meta_desc: "Explore members of the v1beta1 module in the @pulumi/kubernetes package."
git_sha: "37f9ccc3cc778db52fc6ffadd0524341e5efb806"
block_external_search_index: true
---

<!-- WARNING: this page was generated by a tool. Do not edit it by hand. -->
<!-- To change it, please see https://github.com/pulumi/docs/tree/master/tools/tscdocgen. -->

{{< resource-docs-alert "kubernetes" >}}




<h3>Resources</h3>
<ul class="api">
    <li><a href="#CustomResourceDefinition"><span class="symbol resource"></span>CustomResourceDefinition</a></li>
    <li><a href="#CustomResourceDefinitionList"><span class="symbol resource"></span>CustomResourceDefinitionList</a></li>
</ul>


<h3>Others</h3>
<ul class="api">
    <li><a href="#CustomResourceDefinitionArgs"><span class="symbol api"></span>CustomResourceDefinitionArgs</a></li>
    <li><a href="#CustomResourceDefinitionListArgs"><span class="symbol api"></span>CustomResourceDefinitionListArgs</a></li>
</ul>


<h2 id="resources">Resources</h2>
<h3 class="pdoc-module-header" id="CustomResourceDefinition" data-link-title="CustomResourceDefinition">
    <a href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L12">
        Resource <strong>CustomResourceDefinition</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>class</span> <span class='nx'>CustomResourceDefinition</span> <span class='kr'>extends</span> <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResource'>CustomResource</a></code></pre>

CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format &lt;.spec.name&gt;.&lt;.spec.group&gt;. Deprecated in v1.16, planned for removal in v1.22. Use apiextensions.k8s.io/v1 CustomResourceDefinition instead.

<h4 class="pdoc-member-header" id="CustomResourceDefinition-constructor">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L55"> <b>constructor</b></a>
</h4>


<pre class="highlight"><code><span class='kd'></span><span class='kd'>new</span> CustomResourceDefinition(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, args?: <a href='#CustomResourceDefinitionArgs'>CustomResourceDefinitionArgs</a>, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>)</code></pre>


Create a CustomResourceDefinition resource with the given unique name, arguments, and options.

* `name` The _unique_ name of the resource.
* `args` The arguments to use to populate this resource&#39;s properties.
* `opts` A bag of options that control this resource&#39;s behavior.

<h4 class="pdoc-member-header" id="CustomResourceDefinition-get">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L21">method <b>get</b></a>
</h4>


<pre class="highlight"><code><span class='kd'>public static </span>get(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>pulumi.ID</a>&gt;, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>): <a href='#CustomResourceDefinition'>CustomResourceDefinition</a></code></pre>


Get an existing CustomResourceDefinition resource's state with the given name, ID, and optional extra
properties used to qualify the lookup.

<h4 class="pdoc-member-header" id="CustomResourceDefinition-getProvider">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L12">method <b>getProvider</b></a>
</h4>


<pre class="highlight"><code><span class='kd'></span>getProvider(moduleMember: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>): <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ProviderResource'>ProviderResource</a> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span></code></pre>

<h4 class="pdoc-member-header" id="CustomResourceDefinition-isInstance">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L32">method <b>isInstance</b></a>
</h4>


<pre class="highlight"><code><span class='kd'>public static </span>isInstance(obj: <span class='kd'><a href='https://www.typescriptlang.org/docs/handbook/basic-types.html#any'>any</a></span>): obj is CustomResourceDefinition</code></pre>


Returns true if the given object is an instance of CustomResourceDefinition.  This is designed to work even
when multiple copies of the Pulumi SDK have been loaded into the same process.

<h4 class="pdoc-member-header" id="CustomResourceDefinition-apiVersion">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L42">property <b>apiVersion</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>apiVersion: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='s2'>"apiextensions.k8s.io/v1beta1"</span>&gt;;</code></pre>

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources

<h4 class="pdoc-member-header" id="CustomResourceDefinition-id">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L12">property <b>id</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>ID</a>&gt;;</code></pre>

id is the provider-assigned unique ID for this managed resource.  It is set during
deployments and may be missing (undefined) during planning phases.

<h4 class="pdoc-member-header" id="CustomResourceDefinition-kind">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L46">property <b>kind</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>kind: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='s2'>"CustomResourceDefinition"</span>&gt;;</code></pre>

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds

<h4 class="pdoc-member-header" id="CustomResourceDefinition-metadata">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L47">property <b>metadata</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>metadata: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/kubernetes/types/output/#ObjectMeta'>ObjectMeta</a>&gt;;</code></pre>
<h4 class="pdoc-member-header" id="CustomResourceDefinition-spec">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L51">property <b>spec</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>spec: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/kubernetes/types/output/#CustomResourceDefinitionSpec'>CustomResourceDefinitionSpec</a>&gt;;</code></pre>

spec describes how the user wants the resources to appear

<h4 class="pdoc-member-header" id="CustomResourceDefinition-status">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L55">property <b>status</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>status: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/kubernetes/types/output/#CustomResourceDefinitionStatus'>CustomResourceDefinitionStatus</a>&gt;;</code></pre>

status indicates the actual state of the CustomResourceDefinition

<h4 class="pdoc-member-header" id="CustomResourceDefinition-urn">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L12">property <b>urn</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>urn: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#URN'>URN</a>&gt;;</code></pre>

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.

<h3 class="pdoc-module-header" id="CustomResourceDefinitionList" data-link-title="CustomResourceDefinitionList">
    <a href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L12">
        Resource <strong>CustomResourceDefinitionList</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>class</span> <span class='nx'>CustomResourceDefinitionList</span> <span class='kr'>extends</span> <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResource'>CustomResource</a></code></pre>

CustomResourceDefinitionList is a list of CustomResourceDefinition objects.

<h4 class="pdoc-member-header" id="CustomResourceDefinitionList-constructor">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L51"> <b>constructor</b></a>
</h4>


<pre class="highlight"><code><span class='kd'></span><span class='kd'>new</span> CustomResourceDefinitionList(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, args?: <a href='#CustomResourceDefinitionListArgs'>CustomResourceDefinitionListArgs</a>, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>)</code></pre>


Create a CustomResourceDefinitionList resource with the given unique name, arguments, and options.

* `name` The _unique_ name of the resource.
* `args` The arguments to use to populate this resource&#39;s properties.
* `opts` A bag of options that control this resource&#39;s behavior.

<h4 class="pdoc-member-header" id="CustomResourceDefinitionList-get">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L21">method <b>get</b></a>
</h4>


<pre class="highlight"><code><span class='kd'>public static </span>get(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>pulumi.ID</a>&gt;, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>): <a href='#CustomResourceDefinitionList'>CustomResourceDefinitionList</a></code></pre>


Get an existing CustomResourceDefinitionList resource's state with the given name, ID, and optional extra
properties used to qualify the lookup.

<h4 class="pdoc-member-header" id="CustomResourceDefinitionList-getProvider">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L12">method <b>getProvider</b></a>
</h4>


<pre class="highlight"><code><span class='kd'></span>getProvider(moduleMember: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>): <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ProviderResource'>ProviderResource</a> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span></code></pre>

<h4 class="pdoc-member-header" id="CustomResourceDefinitionList-isInstance">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L32">method <b>isInstance</b></a>
</h4>


<pre class="highlight"><code><span class='kd'>public static </span>isInstance(obj: <span class='kd'><a href='https://www.typescriptlang.org/docs/handbook/basic-types.html#any'>any</a></span>): obj is CustomResourceDefinitionList</code></pre>


Returns true if the given object is an instance of CustomResourceDefinitionList.  This is designed to work even
when multiple copies of the Pulumi SDK have been loaded into the same process.

<h4 class="pdoc-member-header" id="CustomResourceDefinitionList-apiVersion">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L42">property <b>apiVersion</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>apiVersion: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='s2'>"apiextensions.k8s.io/v1beta1"</span>&gt;;</code></pre>

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources

<h4 class="pdoc-member-header" id="CustomResourceDefinitionList-id">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L12">property <b>id</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>ID</a>&gt;;</code></pre>

id is the provider-assigned unique ID for this managed resource.  It is set during
deployments and may be missing (undefined) during planning phases.

<h4 class="pdoc-member-header" id="CustomResourceDefinitionList-items">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L46">property <b>items</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>items: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/kubernetes/types/output/#CustomResourceDefinition'>CustomResourceDefinition</a>[]&gt;;</code></pre>

items list individual CustomResourceDefinition objects

<h4 class="pdoc-member-header" id="CustomResourceDefinitionList-kind">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L50">property <b>kind</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>kind: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='s2'>"CustomResourceDefinitionList"</span>&gt;;</code></pre>

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds

<h4 class="pdoc-member-header" id="CustomResourceDefinitionList-metadata">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L51">property <b>metadata</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>metadata: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/kubernetes/types/output/#ListMeta'>ListMeta</a>&gt;;</code></pre>
<h4 class="pdoc-member-header" id="CustomResourceDefinitionList-urn">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L12">property <b>urn</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>urn: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#URN'>URN</a>&gt;;</code></pre>

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.



<h2 id="apis">Others</h2>
<h3 class="pdoc-module-header" id="CustomResourceDefinitionArgs" data-link-title="CustomResourceDefinitionArgs">
    <a href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L98">
        interface <strong>CustomResourceDefinitionArgs</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>CustomResourceDefinitionArgs</span></code></pre>

The set of arguments for constructing a CustomResourceDefinition resource.

<h4 class="pdoc-member-header" id="CustomResourceDefinitionArgs-apiVersion">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L102">property <b>apiVersion</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>apiVersion?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='s2'>"apiextensions.k8s.io/v1beta1"</span>&gt;;</code></pre>

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources

<h4 class="pdoc-member-header" id="CustomResourceDefinitionArgs-kind">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L106">property <b>kind</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>kind?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='s2'>"CustomResourceDefinition"</span>&gt;;</code></pre>

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds

<h4 class="pdoc-member-header" id="CustomResourceDefinitionArgs-metadata">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L107">property <b>metadata</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>metadata?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/kubernetes/types/input/#ObjectMeta'>ObjectMeta</a>&gt;;</code></pre>
<h4 class="pdoc-member-header" id="CustomResourceDefinitionArgs-spec">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinition.ts#L111">property <b>spec</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>spec: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/kubernetes/types/input/#CustomResourceDefinitionSpec'>CustomResourceDefinitionSpec</a>&gt;;</code></pre>

spec describes how the user wants the resources to appear

<h3 class="pdoc-module-header" id="CustomResourceDefinitionListArgs" data-link-title="CustomResourceDefinitionListArgs">
    <a href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L90">
        interface <strong>CustomResourceDefinitionListArgs</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>CustomResourceDefinitionListArgs</span></code></pre>

The set of arguments for constructing a CustomResourceDefinitionList resource.

<h4 class="pdoc-member-header" id="CustomResourceDefinitionListArgs-apiVersion">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L94">property <b>apiVersion</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>apiVersion?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='s2'>"apiextensions.k8s.io/v1beta1"</span>&gt;;</code></pre>

APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources

<h4 class="pdoc-member-header" id="CustomResourceDefinitionListArgs-items">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L98">property <b>items</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>items: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/kubernetes/types/input/#CustomResourceDefinition'>CustomResourceDefinition</a>&gt;[]&gt;;</code></pre>

items list individual CustomResourceDefinition objects

<h4 class="pdoc-member-header" id="CustomResourceDefinitionListArgs-kind">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L102">property <b>kind</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>kind?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='s2'>"CustomResourceDefinitionList"</span>&gt;;</code></pre>

Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds

<h4 class="pdoc-member-header" id="CustomResourceDefinitionListArgs-metadata">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-kubernetes/blob/37f9ccc3cc778db52fc6ffadd0524341e5efb806/sdk/nodejs/apiextensions/v1beta1/customResourceDefinitionList.ts#L103">property <b>metadata</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>metadata?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/kubernetes/types/input/#ListMeta'>ListMeta</a>&gt;;</code></pre>
