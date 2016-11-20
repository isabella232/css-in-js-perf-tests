import { create } from 'jss';
import { renderHtml } from './render';
import { generateStyles } from '../styles';

export const jssWithoutPresetCase = () => {
    const jss = create();

    const { classes } = jss.createStyleSheet(generateStyles()).attach();

    const renderedHtml = renderHtml(classes);

    const css = jss.sheets.toString();

    return `
        <html>
            <head>
                <style type="text/css">${css}</style>
            </head>
            <body>${renderedHtml}</body>
        </html>
    `;
};