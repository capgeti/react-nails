import styled, { css } from "styled-components"
import { TextColorProps, TextSizeProps, TextWeightProps, TextAlignProps } from "../properties/PropertyTypes"
import { resolveTextColor, resolveTextSize, resolveTextWeight, applySingle, resolveTextAlign } from "../properties/PropertyResolver"

interface TextProps extends TextColorProps, TextSizeProps, TextWeightProps, TextAlignProps {
    /**
     * displays text as block, not inline
     */
    block?: boolean,
}

const resolveBlockSingle = (block: boolean = false) => block && css`
    display: block;
`
const resolveBlock = applySingle(resolveBlockSingle, 'block')

const Text = styled.span<TextProps>`
    ${resolveBlock}
    ${resolveTextColor}
    ${resolveTextSize}
    ${resolveTextWeight}
    ${resolveTextAlign}
`

export default Text