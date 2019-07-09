<template>
<div class="highlight"><pre><span></span><span class="kd">function</span> <span class="nx">emptyPromise</span><span class="p">()</span> <span class="p">{</span>
  <span v-visible="step >= 1"><span class="kd">let</span> <span class="nx">res</span><span class="p">,</span> <span class="nx">rej</span><span class="p">;</span></span>
  <span class="kr">const</span> <span class="nx">p</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">((</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span>
    <span v-visible="step >= 1"><span class="nx">res</span> <span class="o">=</span> <span class="nx">resolve</span><span class="p">;</span>
    <span class="nx">rej</span> <span class="o">=</span> <span class="nx">reject</span><span class="p">;</span></span>
  <span class="p">});</span>
  <span v-visible="step >= 2"><span class="nx">p</span><span class="p">.</span><span class="nx">resolve</span> <span class="o">=</span> <span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span>
    <span class="nx">res</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span>
    <span class="k">return</span> <span class="nx">p</span><span class="p">;</span>
  <span class="p">};</span></span>
  <span v-visible="step >= 3"><span class="nx">p</span><span class="p">.</span><span class="nx">reject</span> <span class="o">=</span> <span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span>
    <span class="nx">rej</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span>
    <span class="k">return</span> <span class="nx">p</span><span class="p">;</span>
  <span class="p">};</span></span>

  <span class="k">return</span> <span class="nx">p</span><span class="p">;</span>
<span class="p">}</span>
</pre></div>
</template>

<script>
import './highlight-styles.css';

export default {
  name: 'EmptyPromiseSource',
  props: {
    step: Number,
  },
};
</script>