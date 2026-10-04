---
title: Diagram studies
hide:
  - navigation
  - toc
---

<style>
  .md-content__inner > h1:first-child { display: none; }
</style>

<div class="studies">

<p class="section-eyebrow">Local studies</p>
<h2>Diagram studies.</h2>
<p class="studies__lede">The words live in this file. The motion lives in the studies styles.</p>

<section class="study" id="before-after">
  <p class="section-eyebrow">01 · Before / after</p>
  <h2>The same work, without someone standing there.</h2>

  <div class="ba">
    <input type="radio" name="ba-sky" id="ba-sky-before">
    <input type="radio" name="ba-sky" id="ba-sky-after" checked>
    <div class="ba__head">
      <div>
        <p class="ba__where">Skywalker Sound</p>
        <h3>Two A100s each, then all twelve</h3>
      </div>
      <div class="ba__switch">
        <label for="ba-sky-before">Before</label>
        <label for="ba-sky-after">After</label>
      </div>
    </div>
    <div class="ba__split">
      <article class="ba__card ba__card--before">
        <span>On the machine</span>
        <ol>
          <li>Two A100s per scientist, per model</li>
          <li>Log in and check the bucket mounts</li>
          <li>Shard the model yourself and hope</li>
          <li>Push to GCP: $25k+ a run</li>
        </ol>
      </article>
      <article class="ba__card ba__card--after">
        <span>On the control plane</span>
        <ol>
          <li>All 12 A100s, pools moved in minutes</li>
          <li>Mounts abstracted, checked in the hub</li>
          <li>Run jobs at will, usage tracked</li>
          <li>VAE training: 5 months to weeks</li>
        </ol>
      </article>
    </div>
  </div>

  <div class="ba">
    <input type="radio" name="ba-pro" id="ba-pro-before">
    <input type="radio" name="ba-pro" id="ba-pro-after" checked>
    <div class="ba__head">
      <div>
        <p class="ba__where">Procore</p>
        <h3>A week with an engineer, then about an hour</h3>
      </div>
      <div class="ba__switch">
        <label for="ba-pro-before">Before</label>
        <label for="ba-pro-after">After</label>
      </div>
    </div>
    <div class="ba__split">
      <article class="ba__card ba__card--before">
        <span>Engineer in the loop</span>
        <ol>
          <li>Ask an engineer to run it</li>
          <li>Wait several days, sometimes a week</li>
          <li>Sit through another handoff</li>
          <li>Leave with a result nobody can replay</li>
        </ol>
      </article>
      <article class="ba__card ba__card--after">
        <span>Self-serve, with gates</span>
        <ol>
          <li>Open the workflow</li>
          <li>Approve the OCR</li>
          <li>See the Snowflake result</li>
          <li>Compare the PDF</li>
        </ol>
        <p>About an hour. 10 to 15 people across three sales teams.</p>
      </article>
    </div>
  </div>
</section>

<section class="study" id="ray-topology">
  <p class="section-eyebrow">02 · Ray topology</p>
  <h2>About 40 machines, three pools, one job.</h2>
  <p class="studies__note">Linux, GPU, and Mac stay in their pools. The job moves through the control plane: enroll, run, logs, recover.</p>

  <div class="topo" aria-hidden="true">
    <div class="topo__pools">
      <div class="pool">
        <span>Linux</span>
        <div><i></i><i></i><i></i><i></i><i></i><i></i></div>
      </div>
      <div class="pool pool--gpu">
        <span>GPU</span>
        <div><i></i><i class="is-hot"></i><i></i></div>
      </div>
      <div class="pool pool--mac">
        <span>Mac</span>
        <div><i></i><i></i><i></i><i></i></div>
      </div>
    </div>
    <div class="topo__plane">
      <small>FastAPI · PostgreSQL · Grafana</small>
      <strong>Control plane</strong>
    </div>
    <div class="topo__track">
      <span class="topo__token">Job</span>
      <ol>
        <li>Enroll</li>
        <li>Run</li>
        <li>Logs</li>
        <li>Recover</li>
      </ol>
    </div>
  </div>
</section>

<section class="study" id="lifecycle-gate">
  <p class="section-eyebrow">03 · Lifecycle gate</p>
  <h2>A model can be held.</h2>
  <p class="studies__note">Train and registry are behind it. The model has to clear its WMAPE threshold on the golden dataset, then human review, before deploy lights up.</p>

  <div class="gate">
    <input type="radio" name="gate" id="gate-hold" checked>
    <input type="radio" name="gate" id="gate-pass">
    <div class="gate__head">
      <p class="ba__where">Procore · shared lifecycle</p>
      <div class="ba__switch">
        <label for="gate-hold">Held</label>
        <label for="gate-pass">Promoted</label>
      </div>
    </div>
    <div class="gate__track">
      <ol>
        <li>Train</li>
        <li>Registry</li>
        <li>WMAPE gate</li>
        <li class="is-gate">Review</li>
        <li>Deploy</li>
        <li>Monitor</li>
      </ol>
      <div class="gate__model"><b>Model</b><small class="gate__why gate__why--hold">Held for human review</small><small class="gate__why gate__why--pass">Review passed</small></div>
    </div>
  </div>
  <p class="studies__more"><a href="../procore/modeling-work/#evaluation-and-monitoring">How the gate is evaluated →</a> <a href="../procore/key-projects/">Procore project notes →</a></p>
</section>

<section class="study" id="oop-swap">
  <p class="section-eyebrow">04 · OOP swap</p>
  <h2>The inference run is a template now.</h2>
  <p class="studies__note">Each run used to be its own DAG. Now the framework builds the run from configuration.</p>

  <div class="ba">
    <input type="radio" name="oop" id="oop-before">
    <input type="radio" name="oop" id="oop-after" checked>
    <div class="ba__head">
      <div>
        <p class="ba__where">Procore · inference</p>
        <h3>Per-run DAGs, then one framework</h3>
      </div>
      <div class="ba__switch">
        <label for="oop-before">Before</label>
        <label for="oop-after">After</label>
      </div>
    </div>
    <div class="ba__split">
      <article class="ba__card ba__card--before">
        <span>Per run</span>
        <ol>
          <li>One DAG per inference run</li>
          <li>Copy and edit the wiring</li>
          <li>Weeks to ship a new pipeline</li>
        </ol>
      </article>
      <article class="ba__card ba__card--after">
        <span>One framework</span>
        <ol>
          <li>Reusable components</li>
          <li>Decorators and config</li>
          <li>Hours to ship a new pipeline</li>
        </ol>
        <p>60% lower orchestration cost.</p>
      </article>
    </div>
  </div>
</section>

<section class="study" id="ml-hub">
  <p class="section-eyebrow">05 · ML Hub</p>
  <h2>Five clusters, one place to look.</h2>
  <p class="studies__note">Pick a cluster. The panel shows its nodes, CPU and GPU, what is mounted, and the Grafana usage for the pool.</p>

  <div class="hub">
    <input type="radio" name="hub" id="hub-c1" checked>
    <input type="radio" name="hub" id="hub-c2">
    <input type="radio" name="hub" id="hub-c3">
    <input type="radio" name="hub" id="hub-c4">
    <input type="radio" name="hub" id="hub-c5">
    <div class="hub__list">
      <label for="hub-c1" class="hub__cluster"><span class="hub__dot"></span><strong>audio-train</strong><small>GPU pool · 10 nodes</small></label>
      <label for="hub-c2" class="hub__cluster"><span class="hub__dot"></span><strong>metadata-etl</strong><small>Linux pool · 6 nodes</small></label>
      <label for="hub-c3" class="hub__cluster"><span class="hub__dot"></span><strong>search-index</strong><small>Linux pool · 4 nodes</small></label>
      <label for="hub-c4" class="hub__cluster"><span class="hub__dot"></span><strong>mac-batch</strong><small>Mac pool · 5 nodes</small></label>
      <label for="hub-c5" class="hub__cluster"><span class="hub__dot"></span><strong>eval-sweep</strong><small>GPU pool · reserved for eval</small></label>
    </div>
    <div class="hub__panels">
      <div class="hub__panel hub__panel--c1">
        <p class="ba__where">audio-train · GPU pool · Healthy</p>
        <div class="hub__grid">
          <div><small>Nodes</small><b>10</b></div>
          <div><small>CPU</small><b>320</b></div>
          <div><small>GPU</small><b>10×A100</b></div>
          <div><small>Bucket</small><b>media-train</b></div>
        </div>
        <div class="hub__meters">
          <div class="hub__meter"><span>GPU</span><i style="--v:98%"></i><b>98%</b></div>
          <div class="hub__meter"><span>CPU</span><i style="--v:41%"></i><b>41%</b></div>
          <div class="hub__meter"><span>Mem</span><i style="--v:63%"></i><b>63%</b></div>
        </div>
        <div class="hub__nodes">
          <span>node-01 · 32 CPU · A100</span><span>node-02 · 32 CPU · A100</span><span>node-03 · 32 CPU · A100</span><span>node-04 · 32 CPU · A100</span>
          <span>node-05 · 32 CPU · A100</span><span>node-06 · 32 CPU · A100</span><span>node-07 · 32 CPU · A100</span><span>node-08 · 32 CPU · A100</span>
          <span>node-09 · 32 CPU · A100</span><span>node-10 · 32 CPU · A100</span>
        </div>
        <p class="hub__line">Grafana tracks usage, idle time, and recovery for this pool. Bucket mounts and pool changes are recorded here.</p>
      </div>
      <div class="hub__panel hub__panel--c2">
        <p class="ba__where">metadata-etl · Linux pool · Healthy</p>
        <div class="hub__grid">
          <div><small>Nodes</small><b>6</b></div>
          <div><small>CPU</small><b>192</b></div>
          <div><small>GPU</small><b>—</b></div>
          <div><small>Bucket</small><b>media-lake</b></div>
        </div>
        <div class="hub__meters">
          <div class="hub__meter"><span>CPU</span><i style="--v:58%"></i><b>58%</b></div>
          <div class="hub__meter"><span>Mem</span><i style="--v:44%"></i><b>44%</b></div>
          <div class="hub__meter"><span>Disk</span><i style="--v:61%"></i><b>61%</b></div>
        </div>
        <div class="hub__nodes">
          <span>node-11 · 32 CPU</span><span>node-12 · 32 CPU</span><span>node-13 · 32 CPU</span>
          <span>node-14 · 32 CPU</span><span>node-15 · 32 CPU</span><span>node-16 · 32 CPU</span>
        </div>
        <p class="hub__line">Nightly ETL for media metadata. Pool size and image version change here, not on the machines.</p>
      </div>
      <div class="hub__panel hub__panel--c3">
        <p class="ba__where">search-index · Linux pool · Healthy</p>
        <div class="hub__grid">
          <div><small>Nodes</small><b>4</b></div>
          <div><small>CPU</small><b>128</b></div>
          <div><small>GPU</small><b>—</b></div>
          <div><small>Bucket</small><b>media-index</b></div>
        </div>
        <div class="hub__meters">
          <div class="hub__meter"><span>CPU</span><i style="--v:34%"></i><b>34%</b></div>
          <div class="hub__meter"><span>Mem</span><i style="--v:52%"></i><b>52%</b></div>
          <div class="hub__meter"><span>Disk</span><i style="--v:47%"></i><b>47%</b></div>
        </div>
        <div class="hub__nodes">
          <span>node-21 · 32 CPU</span><span>node-22 · 32 CPU</span><span>node-23 · 32 CPU</span><span>node-24 · 32 CPU</span>
        </div>
        <p class="hub__line">Index builds run off-peak. Idle behavior and availability are visible in Grafana.</p>
      </div>
      <div class="hub__panel hub__panel--c4">
        <p class="ba__where">mac-batch · Mac pool · 1 node recovering</p>
        <div class="hub__grid">
          <div><small>Nodes</small><b>5</b></div>
          <div><small>CPU</small><b>60</b></div>
          <div><small>GPU</small><b>M-series</b></div>
          <div><small>Bucket</small><b>media-render</b></div>
        </div>
        <div class="hub__meters">
          <div class="hub__meter"><span>CPU</span><i style="--v:71%"></i><b>71%</b></div>
          <div class="hub__meter"><span>Mem</span><i style="--v:38%"></i><b>38%</b></div>
          <div class="hub__meter"><span>Disk</span><i style="--v:29%"></i><b>29%</b></div>
        </div>
        <div class="hub__nodes">
          <span>mac-01 · 12 CPU · M2 Ultra</span><span>mac-02 · 12 CPU · M2 Ultra</span><span class="is-down">mac-03 · recovering</span>
          <span>mac-04 · 12 CPU · M2 Ultra</span><span>mac-05 · 12 CPU · M2 Ultra</span>
        </div>
        <p class="hub__line">mac-03 dropped mid-run. The hub marked it, kept the job moving, and recovery is one action.</p>
      </div>
      <div class="hub__panel hub__panel--c5">
        <p class="ba__where">eval-sweep · GPU pool · Reserved</p>
        <div class="hub__grid">
          <div><small>Nodes</small><b>2</b></div>
          <div><small>CPU</small><b>64</b></div>
          <div><small>GPU</small><b>2×A100</b></div>
          <div><small>Bucket</small><b>media-eval</b></div>
        </div>
        <div class="hub__meters">
          <div class="hub__meter"><span>GPU</span><i style="--v:12%"></i><b>12%</b></div>
          <div class="hub__meter"><span>CPU</span><i style="--v:9%"></i><b>9%</b></div>
          <div class="hub__meter"><span>Mem</span><i style="--v:21%"></i><b>21%</b></div>
        </div>
        <div class="hub__nodes">
          <span>node-31 · 32 CPU · A100</span><span>node-32 · 32 CPU · A100</span>
        </div>
        <p class="hub__line">Two A100s stay reserved for eval pipelines. The other ten stay busy with training.</p>
      </div>
    </div>
  </div>
  <p class="studies__more"><a href="../skywalker-sound/key-projects/">Skywalker project notes →</a></p>
</section>

<section class="study" id="data-trust">
  <p class="section-eyebrow">06 · Data quality to trust</p>
  <h2>The check became the review.</h2>
  <p class="studies__note">Glassdoor and Autodesk: quality you could see. Procore: the same idea, applied to models.</p>

  <div class="trust">
    <div class="trust__stage">
      <small>Glassdoor · Autodesk</small>
      <strong>Data quality</strong>
      <ol>
        <li>Freshness</li>
        <li>Completeness</li>
        <li>Anomalies</li>
      </ol>
    </div>
    <div class="trust__arrow" aria-hidden="true">→</div>
    <div class="trust__stage trust__stage--now">
      <small>Procore</small>
      <strong>Evaluation</strong>
      <ol>
        <li>Golden sets</li>
        <li>Regression checks</li>
        <li>Human review</li>
      </ol>
    </div>
    <div class="trust__arrow" aria-hidden="true">→</div>
    <div class="trust__stage trust__stage--end">
      <small>Result</small>
      <strong>Trust</strong>
      <p>People can see why the number or the model changed.</p>
    </div>
  </div>
  <p class="studies__more"><a href="../glassdoor/key-projects/">Glassdoor project notes →</a> · <a href="../autodesk/key-projects/">Autodesk project notes →</a></p>
</section>

<p class="studies__foot"><a href="./">Back to the homepage</a></p>

</div>
