document.addEventListener('DOMContentLoaded', () => {
    console.log("Javascript loaded");

    const container = document.createElement('div');
    container.id = 'container';

    const bodyHTML = `
        <div id="up">
          <div id="A" class="left vertical">
            <div id="A_inner" class="circle">A</div>
          </div>
          <div id="B" class="right">
            <div id="B_inner" class="inner-square">B</div>
          </div>
        </div>
        <div id="down">
          <div id="D" class="left vertical">D</div>
          <div id="C" class="right">C</div>
        </div>
      `;

      container.innerHTML = bodyHTML;

      document.body.appendChild(container);

  });