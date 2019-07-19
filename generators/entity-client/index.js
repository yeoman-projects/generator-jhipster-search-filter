/* eslint-disable consistent-return */
const chalk = require('chalk');
const EntityClientGenerator = require('generator-jhipster/generators/entity-client');
const writeFiles = require('./files').writeFiles;


module.exports = class extends EntityClientGenerator {
    constructor(args, opts) {
        super(args, { fromBlueprint: true, ...opts }); // fromBlueprint variable is important

        if (!this.jhipsterContext) {
            this.error('This is a JHipster blueprint and should be used only like jhipster --blueprint myblueprint');
        }
    }

    get writing() {

        console.log("su_ka")
        const phaseFromJHipster = super._writing();
        const customPhaseSteps = {
            writeAdditionalFile() {
                writeFiles.call(this);
            }
        };
        return Object.assign(phaseFromJHipster, customPhaseSteps);
    }

    get end() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._end();
    }
};
