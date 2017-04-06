import { renderStatic } from 'glamor/server';
import { style } from 'glamor';
import { containerStyle, buttonStyle, notUsedStyle } from '../styles';
import { renderHtml, renderBody } from '../render';

export const glamorCase = (caseName) => {
    const { html, css } = renderStatic(() =>
        renderBody(caseName, style(containerStyle), style(buttonStyle), style(notUsedStyle))
    );

    return renderHtml(css, html);
};
