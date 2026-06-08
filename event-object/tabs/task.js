const listOfTabs = Array.from(document.querySelectorAll('.tabs .tab__navigation .tab'));
const listOfTabsContents = Array.from(document.querySelectorAll('.tabs .tab__content'));

function clickOnTab(event){
    const activeTab = document.querySelector('.tabs .tab_active');
    if (activeTab === event.target) return;
    
    activeTab.classList.remove('tab_active');
    event.target.classList.add('tab_active');

    const n = listOfTabs.findIndex(tab => tab.textContent === event.target.textContent);
    const activeTabContent = document.querySelector('.tabs .tab__content_active');
    
    activeTabContent.classList.remove('tab__content_active');
    listOfTabsContents[n].classList.add('tab__content_active');
}

listOfTabs.forEach((tab) => {
    tab.addEventListener('click', clickOnTab);
    
})