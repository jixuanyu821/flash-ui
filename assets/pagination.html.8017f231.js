import{_ as i,r as a,o as k,c as d,a as n,w as p,F as m,b as s,d as o,e}from"./app.e8f792de.js";const b={},g=s("h1",{id:"\u5206\u9875",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5206\u9875","aria-hidden":"true"},"#"),o(" \u5206\u9875")],-1),h=s("h4",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#"),o(" \u57FA\u7840\u7528\u6CD5")],-1),f=s("ul",null,[s("li",null,"\u793A\u4F8B\uFF1A")],-1),v=e(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ZPagination</span> <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\r
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\r
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">const</span> current1<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\r
    <span class="token keyword">return</span> <span class="token punctuation">{</span>\r
      current1\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">,</span>\r
<span class="token punctuation">}</span><span class="token punctuation">)</span>\r
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details><h4 id="\u66F4\u591A\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A\u5206\u9875" aria-hidden="true">#</a> \u66F4\u591A\u5206\u9875</h4><ul><li>\u793A\u4F8B\uFF1A</li></ul>`,3),y=e(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ZPagination</span>\r
    <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span>\r
    <span class="token attr-name"><span class="token namespace">v-model:</span>pageSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pageSize<span class="token punctuation">&quot;</span></span>\r
    <span class="token attr-name">show-size-changer</span>\r
    <span class="token attr-name">@showSizeChange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onShowSizeChange<span class="token punctuation">&quot;</span></span>\r
    <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total<span class="token punctuation">&quot;</span></span>\r
  <span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ZPagination</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\r
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\r
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      <span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\r
      <span class="token keyword">const</span> total <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>\r
      <span class="token keyword">const</span> pageSizeRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>\r
      <span class="token keyword">const</span> <span class="token function-variable function">onShowSizeChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">current<span class="token punctuation">,</span> pageSize</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
    <span class="token punctuation">}</span>\r
      <span class="token keyword">return</span> <span class="token punctuation">{</span>\r
        current<span class="token punctuation">,</span>\r
        total<span class="token punctuation">,</span>\r
        <span class="token literal-property property">pageSize</span><span class="token operator">:</span> pageSizeRef<span class="token punctuation">,</span>\r
        onShowSizeChange\r
      <span class="token punctuation">}</span>\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\r
    
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></details><h4 id="\u7B80\u5355\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7248\u672C" aria-hidden="true">#</a> \u7B80\u5355\u7248\u672C</h4><ul><li>\u793A\u4F8B\uFF1A</li></ul>`,3),_=e(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ZPagination</span> <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">simple</span> <span class="token punctuation">/&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\r
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\r
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">const</span> current<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\r
    <span class="token keyword">return</span> <span class="token punctuation">{</span>current<span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">,</span>\r
<span class="token punctuation">}</span><span class="token punctuation">)</span>\r
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details><h4 id="\u8DF3\u8F6C\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u8DF3\u8F6C\u7248\u672C" aria-hidden="true">#</a> \u8DF3\u8F6C\u7248\u672C</h4><ul><li>\u793A\u4F8B\uFF1A</li></ul>`,3),w=e(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\r
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ZPagination</span> <span class="token attr-name"><span class="token namespace">v-model:</span>current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>current<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">show-quick-jumper</span> <span class="token punctuation">/&gt;</span></span>\r
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\r
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\r
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\r
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">const</span> current<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\r
    <span class="token keyword">return</span> <span class="token punctuation">{</span>current<span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">,</span>\r
<span class="token punctuation">}</span><span class="token punctuation">)</span>\r
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details><h4 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>current(v-model)</td><td>\u5F53\u524D\u9875\u6570</td><td>number</td><td>1</td></tr><tr><td>pageSize(v-model)</td><td>\u6BCF\u9875\u6761\u6570</td><td>number</td><td>-</td></tr><tr><td>pageSizeOptions</td><td>\u6307\u5B9A\u6BCF\u9875\u53EF\u4EE5\u663E\u793A\u591A\u5C11\u6761</td><td>array</td><td>[&#39;10&#39;, &#39;20&#39;, &#39;50&#39;, &#39;100&#39;]</td></tr><tr><td>showLessItems</td><td>\u662F\u5426\u663E\u793A\u8F83\u5C11\u9875\u9762\u5185\u5BB9</td><td>boolean</td><td>false</td></tr><tr><td>showQuickJumper</td><td>\u662F\u5426\u53EF\u4EE5\u5FEB\u901F\u8DF3\u8F6C\u81F3\u67D0\u9875</td><td>boolean</td><td>false</td></tr><tr><td>total</td><td>\u6570\u636E\u603B\u6570</td><td>number</td><td>0</td></tr><tr><td>defaultPageSize</td><td>\u9ED8\u8BA4\u7684\u6BCF\u9875\u6761\u6570</td><td>number</td><td>10</td></tr><tr><td>hideOnSinglePage</td><td>\u53EA\u6709\u4E00\u9875\u65F6\u662F\u5426\u9690\u85CF\u5206\u9875\u5668</td><td>boolean</td><td>false</td></tr><tr><td>showSizeChanger</td><td>\u662F\u5426\u53EF\u4EE5\u6539\u53D8 pageSize</td><td>boolean</td><td>false</td></tr><tr><td>simple</td><td>\u5F53\u6DFB\u52A0\u8BE5\u5C5E\u6027\u65F6,\u663E\u793A\u4E3A\u7B80\u5355\u5206\u9875</td><td>boolean</td><td>-</td></tr></tbody></table><h4 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h4><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>showSizeChange</td><td>pageSize \u53D8\u5316\u7684\u56DE\u8C03</td><td>Function(current, size)</td></tr><tr><td>change</td><td>\u9875\u7801\u6539\u53D8\u7684\u56DE\u8C03,\u53C2\u6570\u662F\u6539\u53D8\u540E\u7684\u9875\u7801\u53CA\u6BCF\u9875\u6761\u6570</td><td>Function(page, pageSize)</td></tr></tbody></table>`,5);function q(S,z){const c=a("paginationDemo1"),t=a("clientOnly"),l=a("paginationDemo2"),u=a("paginationDemo4"),r=a("paginationDemo3");return k(),d(m,null,[g,h,f,n(t,null,{default:p(()=>[n(c)]),_:1}),v,n(t,null,{default:p(()=>[n(l)]),_:1}),y,n(t,null,{default:p(()=>[n(u)]),_:1}),_,n(t,null,{default:p(()=>[n(r)]),_:1}),w],64)}var C=i(b,[["render",q],["__file","pagination.html.vue"]]);export{C as default};
