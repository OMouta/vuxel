import{_ as i,c as s,a0 as a,o as t}from"./chunks/framework.CiFqC8g5.js";const k=JSON.parse('{"title":"Utility Functions","description":"","frontmatter":{},"headers":[],"relativePath":"docs/ref/utility.md","filePath":"docs/ref/utility.md"}'),l={name:"docs/ref/utility.md"};function n(o,e,p,r,d,c){return t(),s("div",null,e[0]||(e[0]=[a(`<h1 id="utility-functions" tabindex="-1">Utility Functions <a class="header-anchor" href="#utility-functions" aria-label="Permalink to &quot;Utility Functions&quot;">​</a></h1><p>The Utility module provides various helper functions.</p><h2 id="utility-createapp-template-screengui-screengui" tabindex="-1">Utility.CreateApp(template, screenGui) -&gt; <code>ScreenGui</code> <a class="header-anchor" href="#utility-createapp-template-screengui-screengui" aria-label="Permalink to &quot;Utility.CreateApp(template, screenGui) -&gt; \`ScreenGui\`&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can also use <code>Vuxel.CreateApp</code> instead!</p></div><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li>template <ul><li>Type: <code>{Table-based Component} | Instance</code></li><li>Required: <code>Yes</code></li><li>Description: The component template to be rendered as the root element.</li></ul></li><li>screenGui <ul><li>Type: <code>Instance (ScreenGui) | nil</code></li><li>Required: <code>No</code></li><li>Description: Optional <code>ScreenGui</code> instance to use as the root. If not provided, a new <code>ScreenGui</code> is created.</li></ul></li></ol><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li>ScreenGui <ul><li>Type: <code>Instance (ScreenGui)</code></li><li>Always: <code>Yes</code></li><li>Description: The root <code>ScreenGui</code> that contains the rendered component tree.</li></ul></li></ol><h3 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Initializes a new app with the specified root frame, if no screenGui is given it will create a new <code>ScreenGui</code> and parent it to the LocalPlayer&#39;s PlayerGui. Passed screenGui&#39;s will get an added reference as &quot;<code>root</code>&quot;. Get it using <code>Vuxel.GetRef(&quot;root&quot;)</code>!</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>It is recomended to provide an already templated ui, use <code>Vuxel.Template</code> before creating an app if providing a table-based template, if not templated, CreateApp will template it for you but will trow a warning!</p></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rootFrame </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Instance.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Frame&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vuxel.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Utility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CreateApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rootFrame)</span></span></code></pre></div><h2 id="utility-computed-callback-dependencies-computed" tabindex="-1">Utility.Computed(callback, ...dependencies) -&gt; <code>Computed</code> <a class="header-anchor" href="#utility-computed-callback-dependencies-computed" aria-label="Permalink to &quot;Utility.Computed(callback, ...dependencies) -&gt; \`Computed\`&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can also use <code>Vuxel.Computed</code> instead!</p></div><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li>callback <ul><li>Type: <code>function</code></li><li>Required: <code>Yes</code></li><li>Description: The function to compute the derived state value based on dependencies.</li></ul></li><li>...dependencies <ul><li>Type: <code>State</code> (one or more)</li><li>Required: <code>Yes</code></li><li>Description: One or more reactive <code>State</code> objects to serve as dependencies for the computed property.</li></ul></li></ol><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li>Computed <ul><li>Type: <code>Computed (custom type)</code></li><li>Always: <code>Yes</code></li><li>Description: A computed state object that updates when any dependency changes.</li></ul></li></ol><h3 id="description-1" tabindex="-1">Description <a class="header-anchor" href="#description-1" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Creates a computed property that automatically updates when its dependencies change.</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vuxel.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">State</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;John&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> greeting </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vuxel.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Utility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Computed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello, &quot; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name)</span></span></code></pre></div>`,21)]))}const u=i(l,[["render",n]]);export{k as __pageData,u as default};