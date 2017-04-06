import { renderStatic } from 'glamor/server';
import { style } from 'glamor';
import { createContainerStyle, createButtonStyle } from '../styles';
import { renderHtml, renderBody } from '../render';

const containerStyle = createContainerStyle()
const buttonStyle = createButtonStyle()

export const glamorCase = (caseName) => {
    const { html, css } = renderStatic(() =>
        renderBody(caseName, style(containerStyle), style(buttonStyle))
    );

    return renderHtml(css, html);
};
