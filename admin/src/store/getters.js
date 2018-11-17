/**
 * @author
 * @file vuex getters
 */

export function getTags({tags}) {
    if (tags.length !== 0) {
        return tags.split(',')
    }
    return []
}



