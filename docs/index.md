---
hide:
  - navigation
  - toc
description: ML infrastructure, distributed systems, and AI. I build systems that make hard work easier to trust.
---

<div class="portfolio-home">

<section class="portfolio-hero">
  <div class="portfolio-hero__copy">
    <p class="hero-name">Chris Fiegel</p>
    <p class="hero-disciplines">ML Infrastructure · Distributed Systems · AI</p>
    <h1>I build systems that make hard work easier to trust.</h1>
    <p class="portfolio-lede">Distributed research infrastructure at Skywalker Sound. Previously Staff ML at Procore. I build platforms that turn complicated ML workflows into systems researchers and engineers can actually use.</p>
    <div class="portfolio-actions">
      <a class="portfolio-button portfolio-button--primary" href="diagram-studies/#ml-hub">See the ML Hub</a>
      <a class="portfolio-button portfolio-button--secondary" href="diagram-studies/">Diagram Studies</a>
      <a class="portfolio-text-link" href="https://www.linkedin.com/in/chrisfiegel/" target="_blank" rel="noopener">LinkedIn <span>↗</span></a>
    </div>
  </div>
  <a class="hero-hub" href="diagram-studies/#ml-hub" aria-label="Open the ML Hub study">
    <div class="hero-hub__bar">
      <span class="hero-hub__live"></span>
      <b>ML Hub</b>
      <small>Skywalker Sound</small>
    </div>
    <ul class="hero-hub__rows">
      <li><strong>audio-train</strong><small>8 × A100</small><i style="--v:82%"></i></li>
      <li><strong>metadata-etl</strong><small>192 CPU</small><i style="--v:58%"></i></li>
      <li><strong>search-index</strong><small>128 CPU</small><i style="--v:34%"></i></li>
      <li class="is-warn"><strong>mac-batch</strong><small>1 recovering</small><i style="--v:71%"></i></li>
      <li><strong>eval-sweep</strong><small>3 × A100</small><i style="--v:12%"></i></li>
    </ul>
    <div class="hero-hub__foot">
      <span>GCP</span><span>AWS</span><span>On-prem A100</span><span>Mac Studio</span>
      <em>Open →</em>
    </div>
  </a>
</section>

<section class="impact-metrics" aria-label="Impact">
  <div><strong>~40</strong><span>machines across GCP, AWS, on-prem A100s, and Mac Studios</span></div>
  <div><strong>5</strong><span>Ray clusters, one control plane</span></div>
  <div><strong>$8M+</strong><span>revenue-associated models</span></div>
  <div><strong>60%</strong><span>orchestration cost reduction</span></div>
</section>

<section class="through-line">
  <p>Most of my work starts with a slow, confusing, or overly manual process and ends with something people can use without an engineer standing next to them.</p>
</section>

<a class="case case--skywalker" href="diagram-studies/#ml-hub">
  <div class="case__copy">
    <p class="section-eyebrow">Now</p>
    <h2>Skywalker Sound</h2>
    <p class="case__headline">Two control planes</p>
    <p>A Ray control plane across GCP, AWS, on-prem A100s, and Mac Studios, for four research scientists and one MLE. A data control plane for the media itself.</p>
    <div class="feature-tags"><span>Ray</span><span>Data</span><span>GCP</span><span>AWS</span><span>A100</span></div>
  </div>
  <div class="compute-map" aria-hidden="true">
    <div class="compute-map__sources">
      <span>GCP</span>
      <span>AWS</span>
      <span>A100s</span>
      <span>Mac Studios</span>
    </div>
    <div class="compute-map__plane">
      <small>Control plane</small>
      <strong>Ray</strong>
    </div>
    <div class="compute-map__outs">
      <span>History</span>
      <span>Logs</span>
      <span>Health</span>
      <span>Recovery</span>
    </div>
  </div>
  <div class="compute-map compute-map--data" aria-hidden="true">
    <div class="compute-map__sources">
      <span>Artifacts</span>
      <span>ETL</span>
    </div>
    <div class="compute-map__plane compute-map__plane--data">
      <small>Control plane</small>
      <strong>Data</strong>
    </div>
    <div class="compute-map__outs">
      <span>Dim models</span>
      <span>Viz</span>
      <span>Certifications</span>
      <span>HiT editing</span>
    </div>
  </div>
</a>

<a class="case case--procore" href="diagram-studies/#lifecycle-gate">
  <div class="case__copy">
    <p class="section-eyebrow">Previously</p>
    <h2>Procore</h2>
    <p class="case__headline">One lifecycle, four teams</p>
    <p>Training, registry, evaluation, human review, promotion, deployment, and monitoring through one shared platform.</p>
    <div class="case__results">
      <span>4 teams adopted</span>
      <span>A week to an hour</span>
    </div>
  </div>
  <ol class="lifecycle" aria-label="Shared model lifecycle">
    <li>Train</li>
    <li>Registry</li>
    <li>Evaluate</li>
    <li>Review</li>
    <li>Deploy</li>
    <li>Monitor</li>
  </ol>
</a>

<section class="independent-band">
  <p class="section-eyebrow">Independent</p>
  <div class="independent-row">
    <a href="independent-work/products-and-tools/#northpaw"><span>NorthPaw</span><strong>Dog safety without the black box</strong></a>
    <a href="independent-work/products-and-tools/#fittrack"><span>FitTrack</span><strong>The plan after life happens</strong></a>
    <a href="independent-work/writing-and-creative-work/#fractured-sky"><span>Fractured Sky</span><strong>Six weeks to draft. Years to finish.</strong></a>
  </div>
</section>

<section class="portfolio-section career-section">
  <div class="portfolio-section__heading portfolio-section__heading--compact">
    <div><p class="section-eyebrow">Career</p><h2>Built from the whole lifecycle</h2></div>
    <p>QA to business systems to data engineering to ML platforms and research infrastructure.</p>
  </div>
  <div class="career-line">
    <a class="career-stop" href="autodesk/role-descriptions/"><span class="career-dot"></span><span class="career-years">2013 · 2019</span><strong>Autodesk</strong><small>QA to senior data engineer</small></a>
    <a class="career-stop" href="glassdoor/role-descriptions/"><span class="career-dot"></span><span class="career-years">2019 · 2021</span><strong>Glassdoor</strong><small>Big data engineering</small></a>
    <a class="career-stop" href="disney/role-descriptions/"><span class="career-dot"></span><span class="career-years">2021 · 2022</span><strong>Disney / Hulu</strong><small>Lead data engineer</small></a>
    <a class="career-stop" href="procore/role-descriptions/"><span class="career-dot"></span><span class="career-years">2022 · 2026</span><strong>Procore</strong><small>Staff ML platform</small></a>
    <a class="career-stop career-stop--active" href="skywalker-sound/role-description/"><span class="career-dot"></span><span class="career-years">2026 · NOW</span><strong>Skywalker Sound</strong><small>Research infrastructure</small></a>
  </div>
</section>

<section class="universe-section">
  <div class="portfolio-section__heading portfolio-section__heading--compact">
    <div><p class="section-eyebrow">The wider map</p><h2>Work, and the rest of the life.</h2></div>
  </div>
  <nav class="portfolio-hero__visual personal-universe" data-personal-universe aria-label="Explore Chris's technical skills and life outside engineering">
    <div class="universe-stars universe-stars--far" data-universe-depth="0.15" aria-hidden="true"></div>
    <div class="universe-stars universe-stars--near" data-universe-depth="0.35" aria-hidden="true"></div>
    <div class="universe-glow" data-universe-depth="0.1" aria-hidden="true"></div>
    <div class="universe-orbits" data-universe-depth="0.25" aria-hidden="true">
      <span class="universe-orbit universe-orbit--inner"></span>
      <span class="universe-orbit universe-orbit--middle"></span>
      <span class="universe-orbit universe-orbit--outer"></span>
    </div>
    <div class="universe-core" data-universe-depth="0.5">
      <span>CHRIS</span>
      <strong>A life built<br>with intention</strong>
    </div>
    <a class="universe-node universe-node--aws universe-node--outer" href="procore/key-projects/#procore-key-projects"><span class="universe-node__body"><i></i><b>AWS</b></span></a>
    <a class="universe-node universe-node--gcp universe-node--middle" href="skywalker-sound/role-description/"><span class="universe-node__body"><i></i><b>GCP</b></span></a>
    <a class="universe-node universe-node--sagemaker universe-node--outer" href="procore/key-projects/#procore-key-projects"><span class="universe-node__body"><i></i><b>SageMaker</b></span></a>
    <a class="universe-node universe-node--ray universe-node--middle" href="skywalker-sound/key-projects/"><span class="universe-node__body"><i></i><b>Ray + GPU</b></span></a>
    <a class="universe-node universe-node--registry universe-node--outer" href="procore/key-projects/#procore-key-projects"><span class="universe-node__body"><i></i><b>Model Registry</b></span></a>
    <a class="universe-node universe-node--data universe-node--middle" href="glassdoor/key-projects/#glassdoor-key-projects"><span class="universe-node__body"><i></i><b>Spark + Airflow</b></span></a>
    <a class="universe-node universe-node--etl universe-node--outer" href="autodesk/key-projects/#autodesk-key-projects"><span class="universe-node__body"><i></i><b>ETL</b></span></a>
    <a class="universe-node universe-node--evaluation universe-node--middle" href="procore/key-projects/#additional-platform-and-ai-work"><span class="universe-node__body"><i></i><b>Evaluation</b></span></a>
    <a class="universe-node universe-node--product universe-node--personal" href="independent-work/products-and-tools/"><span class="universe-node__body"><i></i><b>Product Builder</b></span></a>
    <a class="universe-node universe-node--writer universe-node--personal" href="independent-work/writing-and-creative-work/#fractured-sky"><span class="universe-node__body"><i></i><b>Writer</b></span></a>
    <a class="universe-node universe-node--endurance universe-node--personal" href="beyond-engineering/"><span class="universe-node__body"><i></i><b>Endurance</b></span></a>
    <a class="universe-node universe-node--dogs universe-node--personal" href="independent-work/products-and-tools/#northpaw"><span class="universe-node__body"><i></i><b>Dogs</b></span></a>
    <a class="universe-node universe-node--music universe-node--personal" href="independent-work/writing-and-creative-work/#music-and-storytelling-experiments"><span class="universe-node__body"><i></i><b>Music</b></span></a>
    <a class="universe-node universe-node--adventure universe-node--personal" href="beyond-engineering/"><span class="universe-node__body"><i></i><b>Adventure</b></span></a>
  </nav>
</section>

<section class="portfolio-section personal-section">
  <div class="personal-copy">
    <p class="section-eyebrow">Beyond the job title</p>
    <h2>The other parts are not really separate.</h2>
    <p>I worked at a veterinary hospital through high school and college. I have finished Ironman Lake Tahoe, Escape from Alcatraz, an ultramarathon, and more than 12 marathons. I write science fiction and occasionally sign up for things that scare me a little.</p>
    <p>Those threads show up in how I build: prepare carefully, listen when reality disagrees with the plan, and keep going after the first burst of excitement wears off.</p>
    <a class="portfolio-button portfolio-button--secondary" href="beyond-engineering/">Beyond engineering</a>
  </div>
  <div class="personal-marks" aria-hidden="true">
    <span>140.6</span>
    <span>12+</span>
    <span>3×</span>
    <small>IRONMAN · MARATHONS · SKYDIVES</small>
  </div>
</section>

<section class="explore-section">
  <p class="section-eyebrow">Go deeper</p>
  <div class="explore-grid">
    <a href="diagram-studies/"><span>Visual artifacts</span><strong>Diagram Studies</strong><em>→</em></a>
    <a href="chapter4/"><span>How I think</span><strong>Discussion Points</strong><em>→</em></a>
    <a href="tags/"><span>Browse by subject</span><strong>127 Topics</strong><em>→</em></a>
  </div>
</section>

<footer class="portfolio-footer-note">
  <p>This site is my running record of what I have built, what worked, what did not, and what I learned along the way.</p>
  <a href="diagram-studies/">Diagram studies</a>
  <a href="https://github.com/dw-wolfpack">GitHub ↗</a>
</footer>

</div>
