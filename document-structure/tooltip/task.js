    const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

    let activeTooltip = null;
    let activeElement = null;

    function clickOnTooltip(e) {
        event.preventDefault();

        if (activeElement === e.target) {
            activeTooltip.remove();
            activeElement = null;
            activeTooltip = null;
            return;
        }

        if (activeTooltip) {
            activeTooltip.remove();
        }

        const element = e.target;
        const tooltip = document.createElement('div')

        tooltip.textContent = element.title;
        tooltip.classList = 'tooltip tooltip_active';
        tooltip.style.position = 'absolute';

        document.body.appendChild(tooltip);

        const rect = element.getBoundingClientRect();
        tooltip.style.left = (rect.left + pageXOffset) + 'px';
        tooltip.style.top = (rect.bottom + pageYOffset) + 'px';

        activeElement = element;
        activeTooltip = tooltip;
    }

    tooltips.forEach((el) => el.addEventListener('click', clickOnTooltip));

