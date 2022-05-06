import{_ as l,r as t,o as r,c as i,a as s,w as a,F as u,e as o,b as n,d as e}from"./app.8cb14a04.js";const d={},k=o(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h1><h2 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vue create my-project
<span class="token builtin class-name">cd</span> my-project
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2>`,4),m=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(` i z-flash-ui
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br")])],-1),b=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),e(),n("span",{class:"token function"},"add"),e(` z-flash-ui
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br")])],-1),h=o(`<h2 id="\u5F15\u5165\u53CA\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u53CA\u4F7F\u7528" aria-hidden="true">#</a> \u5F15\u5165\u53CA\u4F7F\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//main.js</span>
<span class="token keyword">import</span> flashUi <span class="token keyword">from</span> <span class="token string">&#39;z-flash-ui&#39;</span>

<span class="token keyword">import</span> Antd <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span>

<span class="token keyword">import</span> <span class="token string">&#39;zrar-ui/src/lib/index.less&#39;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>flashUi<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u65E5\u671F\u7EC4\u4EF6\u8F6C\u8BD1\u4E2D\u6587" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F\u7EC4\u4EF6\u8F6C\u8BD1\u4E2D\u6587" aria-hidden="true">#</a> \u65E5\u671F\u7EC4\u4EF6\u8F6C\u8BD1\u4E2D\u6587</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">&#39;dayjs&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;dayjs/locale/zh-cn&#39;</span>
<span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue/es/date-picker/locale/zh_CN&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>locale <span class="token operator">=</span> locale
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>dayjs <span class="token operator">=</span> dayjs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,4);function g(f,_){const p=t("CodeGroupItem"),c=t("CodeGroup");return r(),i(u,null,[k,s(c,null,{default:a(()=>[s(p,{title:"NPM"},{default:a(()=>[m]),_:1}),s(p,{title:"YARN"},{default:a(()=>[b]),_:1})]),_:1}),h],64)}var y=l(d,[["render",g],["__file","getting-started.html.vue"]]);export{y as default};
