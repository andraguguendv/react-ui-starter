export const extractNestedValue = (object: any, nestedKeys: string) => {
    return nestedKeys.split('.').reduce((obj, key) => obj[key], object)
}