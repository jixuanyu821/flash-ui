import{_ as l,r as s,o as r,c as d,a,w as p,F as i,b as n,d as e,e as o}from"./app.e8f792de.js";const k={},m=n("h1",{id:"\u6570\u5B57\u8F93\u5165\u6846",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6570\u5B57\u8F93\u5165\u6846","aria-hidden":"true"},"#"),e(" \u6570\u5B57\u8F93\u5165\u6846")],-1),b=n("h4",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#"),e(" \u57FA\u7840\u7528\u6CD5")],-1),g=n("ul",null,[n("li",null,"\u793A\u4F8B\uFF1A")],-1),h=o(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-input-number</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputNumber<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\r
    \u5F53\u524D\u503C\uFF1A{{ value }}\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\r
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\r
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token keyword">return</span> <span class="token punctuation">{</span>\r
      value<span class="token punctuation">,</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">;</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">,</span>\r
\r
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></details><h4 id="\u57FA\u7840\u7528\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5-1" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h4><ul><li>\u793A\u4F8B\uFF1A</li></ul>`,3),f=o(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-space</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-input-number</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value = 99<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Reset<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-button</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-space</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\r
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\r
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token keyword">return</span> <span class="token punctuation">{</span>\r
      value<span class="token punctuation">,</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">;</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">,</span>\r
\r
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></details><h4 id="\u5171\u540C\u7684-api" tabindex="-1"><a class="header-anchor" href="#\u5171\u540C\u7684-api" aria-hidden="true">#</a> \u5171\u540C\u7684 API</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>addonAfter</td><td>\u5E26\u6807\u7B7E\u7684 input,\u8BBE\u7F6E\u540E\u7F6E\u6807\u7B7E</td><td>slot</td><td></td></tr><tr><td>addonBefore</td><td>\u5E26\u6807\u7B7E\u7684 input,\u8BBE\u7F6E\u524D\u7F6E\u6807\u7B7E</td><td>slot</td><td></td></tr><tr><td>autofocus</td><td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td></tr><tr><td>bordered</td><td>\u662F\u5426\u6709\u8FB9\u6846</td><td>boolean</td><td>true</td></tr><tr><td>controls</td><td>\u662F\u5426\u663E\u793A\u589E\u51CF\u6309\u94AE</td><td>boolean</td><td>true</td></tr><tr><td>decimalSeparator</td><td>\u5C0F\u6570\u70B9</td><td>string</td><td></td></tr><tr><td>defaultValue</td><td>\u521D\u59CB\u503C</td><td>number</td><td></td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>false</td></tr><tr><td>formatter</td><td>\u6307\u5B9A\u8F93\u5165\u6846\u5C55\u793A\u503C\u7684\u683C\u5F0F</td><td>function(value: number | string, info: { userTyping: boolean, input: string }): string</td><td></td></tr><tr><td>keyboard</td><td>\u662F\u5426\u542F\u7528\u952E\u76D8\u5FEB\u6377\u884C\u4E3A</td><td>boolean</td><td>true</td></tr><tr><td>max</td><td>\u6700\u5927\u503C</td><td>number</td><td></td></tr><tr><td>min</td><td>\u6700\u5C0F\u503C</td><td>number</td><td></td></tr><tr><td>parser</td><td>\u6307\u5B9A\u4ECE formatter \u91CC\u8F6C\u6362\u56DE\u6570\u5B57\u7684\u65B9\u5F0F\uFF0C\u548C formatter \u642D\u914D\u4F7F\u7528</td><td>function( string): number</td><td></td></tr><tr><td>precision</td><td>\u6570\u503C\u7CBE\u5EA6</td><td>number</td><td></td></tr><tr><td>prefix</td><td>\u5E26\u6709\u524D\u7F00\u56FE\u6807\u7684 input</td><td>slot</td><td></td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5927\u5C0F</td><td>string</td><td></td></tr><tr><td>step</td><td>\u6BCF\u6B21\u6539\u53D8\u6B65\u6570\uFF0C\u53EF\u4EE5\u4E3A\u5C0F\u6570</td><td>number|string</td><td>1</td></tr><tr><td>stringMode</td><td>\u5B57\u7B26\u503C\u6A21\u5F0F\uFF0C\u5F00\u542F\u540E\u652F\u6301\u9AD8\u7CBE\u5EA6\u5C0F\u6570\u3002\u540C\u65F6 change \u4E8B\u4EF6\u5C06\u8FD4\u56DE string \u7C7B\u578B</td><td>boolean</td><td>false</td></tr><tr><td>value(v-model)</td><td>\u5F53\u524D\u503C</td><td>number</td><td></td></tr></tbody></table><h4 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h4><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u53D8\u5316\u56DE\u8C03</td><td>Function(value: number | string)</td></tr><tr><td>pressEnter</td><td>\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03</td><td>function(e)</td></tr><tr><td>step</td><td>\u70B9\u51FB\u4E0A\u4E0B\u7BAD\u5934\u7684\u56DE\u8C03</td><td>(value: number, info: { offset: number, type: &#39;up&#39; | &#39;down&#39; }) =&gt; void</td></tr></tbody></table>`,5);function v(_,q){const c=s("inputNumberDemo1"),t=s("clientOnly"),u=s("inputNumberDemo2");return r(),d(i,null,[m,b,g,a(t,null,{default:p(()=>[a(c)]),_:1}),h,a(t,null,{default:p(()=>[a(u)]),_:1}),f],64)}var x=l(k,[["render",v],["__file","inputNumber.html.vue"]]);export{x as default};