export const addValidationClasses = (input: HTMLInputElement | HTMLTextAreaElement) => {
    if (!input.classList.contains("input-validation")) {
        input.classList.add("input-validation")
    }
}