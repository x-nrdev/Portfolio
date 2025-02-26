import { describe, expect, test, vi } from "vitest"
import { addValidationClasses } from "../utils/formValidation"

describe("form", () => {
    const input = document.createElement("input")
    test("should call addValidationClasses function when checking for validation", () => {
        const spy = vi.fn(addValidationClasses)
        input.addEventListener("input", () => {
            spy(input)
        })

        input.dispatchEvent(new Event("input"))
        expect(spy).toHaveBeenCalled()
    })

    test("should add validation classes to input", () => {
        addValidationClasses(input)
        expect(input.classList.contains("input-state")).toBe(true)
    })
})