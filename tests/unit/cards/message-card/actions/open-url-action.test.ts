import { describe, expect, it } from "@jest/globals";
import { OpenUriAction } from '../../../../../src/cards/message-card/actions/open-uri-action';
import { IPotentialActionTargetOSType, OpenURITargetProps } from "../../../../../src/cards/types/message-card-types";

describe('OpenUriAction class', () => {
    const os: IPotentialActionTargetOSType = "default";
    const uri = "https://www.google.com";
    const target = { os, uri }
    const targets: OpenURITargetProps[] = [];
    targets.push(target)

    it('should be defined', () => {
        const action = new OpenUriAction("Visit my site", targets);
        expect(action).toBeDefined();
        expect(action.targets).toEqual(targets);
        expect(action["@type"]).toEqual("OpenUri");
        expect(action.name).toEqual("Visit my site");
    });

    it('should set properties and return expected value', () => {
        const action = new OpenUriAction("Visit my site", targets);
        action.name = "Visit my blog";
        const _os: IPotentialActionTargetOSType = "android";
        const _uri = "https://www.youtube.com";
        const _target = { os: _os, uri: _uri }
        const _targets: OpenURITargetProps[] = [];
        _targets.push(_target)

        action.targets = _targets;

        expect(action.name).toEqual("Visit my blog");
        expect(action.targets).toEqual(_targets);
    });

    it('should return expected get method value', () => {
        const action = new OpenUriAction("Visit my site", targets);
        action.name = "Visit my blog";

        expect(action.toObject()).toStrictEqual({
            "@type": "OpenUri",
            name: "Visit my blog",
            targets
        })

    });
});