const listOfTabs = Array.from(document.querySelectorAll('.tab'));

function clickOnTab(event){
    const parentOfActiveTab = event.target.closest('.tabs');
    const activeTab = parentOfActiveTab.querySelector('.tab_active');
    if (activeTab === event.target) return;
    
    activeTab.classList.remove('tab_active');
    event.target.classList.add('tab_active');

    const currentListOfTabs = Array.from(parentOfActiveTab.querySelectorAll('.tab'));
    const currentListOfTabsContents = Array.from(parentOfActiveTab.querySelectorAll('.tab__content'))

    const n = currentListOfTabs.indexOf(event.target);
    const activeTabContent = parentOfActiveTab.querySelector('.tab__content_active');
    
    activeTabContent.classList.remove('tab__content_active');
    currentListOfTabsContents[n].classList.add('tab__content_active');
}

listOfTabs.forEach((tab) => {
    tab.addEventListener('click', clickOnTab);
})