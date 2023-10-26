export const responsiveSite = () => {
    // let da_elements = document.querySelectorAll('[data-da]');
    // let parents_original: { parent: HTMLElement; index: number }[] = [];
    // let attr_elements: string[] = [];
    // let attr_element: string[] = [];
    // let match_media: MediaQueryList[] = [];
    //
    // for (let item of da_elements) {
    //     if (item.parentElement) {
    //         let parentChildren = item.parentElement.children;
    //         for (let i = 0; i < parentChildren.length; i++) {
    //             if (parentChildren[i] == item) {
    //                 parents_original.push({
    //                     'parent': item.parentElement,
    //                     'index': i
    //                 })
    //             }
    //         }
    //     }
    // }
    //
    // for (let item of da_elements) {
    //     if (item instanceof HTMLElement) {
    //         let dataset = item.dataset;
    //         if (dataset && dataset.da) {
    //             attr_elements.push(dataset.da);
    //         }
    //     }
    // }
    //
    // for (let i = 0; i < attr_elements.length; i++) {
    //     match_media.push(window.matchMedia("(max-width:" + attr_elements[i].split(', ')[2] + "px)"));
    //     match_media[i].addEventListener('change', dinamic_adapt);
    // }
    //
    // function dinamic_adapt() {
    //     for (let i = 0; i < match_media.length; i++) {
    //         if (match_media[i].matches) {
    //             attr_element = attr_elements[i].split(', ');
    //             const querySelectorResult = document.querySelector(`.${attr_element[0]}`);
    //             if (querySelectorResult) {
    //                 querySelectorResult.insertBefore(da_elements[i], querySelectorResult.children[parseInt(attr_element[1])]);
    //             }
    //         } else {
    //             parents_original[i].parent.insertBefore(da_elements[i], parents_original[i].parent.children[parents_original[i].index]);
    //         }
    //     }
    // }
}