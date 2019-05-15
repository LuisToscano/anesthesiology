import { truncateDecimal } from '../../core/constants/utils.constant';

let validateRoundAndTruncate = (response : number, value : number, decimals : number) => {
    return response === truncateDecimal(value, decimals) ||
        value === parseFloat(value.toFixed(decimals));
}

let validateErrorMargin = (response : number, value : number, margin : number) => {
    let _response = Math.abs(response);
    let _value = Math.abs(value);
    let _margin = Math.abs(margin);

    return (_response <= (_value + _margin)) && (response >= (value - margin));
}

let getRectangularComponentsArr = (rectangularComponentsStr) => {
    let rectangularComponents = rectangularComponentsStr.split(/[ijk]/);
    rectangularComponents.pop();
    return rectangularComponents.map(rectComp => parseFloat(rectComp));
}

let validateRectangularComponents = (splittedComponents : Array<any>, correct : any, margin : number) => {
    return validateErrorMargin(splittedComponents[0], correct.i, margin) &&
           validateErrorMargin(splittedComponents[1], correct.j, margin) &&
           validateErrorMargin(splittedComponents[2], correct.k, margin);
}

let sceneOneExerciseOneData = (variables) => {
    let hexagonSide = variables.hexagonSide.value;
    let tieDownDistance = variables.tieDownDistance.value;
    let hexagonWeight = variables.hexagonWeight.value;
    let asteroidGravity = variables.asteroidGravity.value
    let hexagonSideCms = hexagonSide * 100;
    let cableLength = Math.hypot(hexagonSideCms, tieDownDistance);
    let w = hexagonWeight * asteroidGravity;
    let tGE = (w * cableLength) / (3 * tieDownDistance);

    let tensions = {
        GE: tGE
    };

    let rectangularComponents = {
        TGE: {
            i: 0,
            j: -1 * tGE * (hexagonSideCms / cableLength),
            k: -1 * tGE * (tieDownDistance / cableLength)
        },
        TGD: {
            i: tGE * ((hexagonSideCms * -1 * Math.sin(60 * (Math.PI / 180)) ) / cableLength),
            j: tGE * ((hexagonSideCms / 2) / cableLength),
            k: -1 * tGE * (tieDownDistance / cableLength)
        }
    };

    return {
        tensions: tensions,
        rectangularComponents: rectangularComponents
    };
};

let sceneOneExerciseTwoData = (variables) => {
    let lampMass = variables.lampMass.value;
    let maxMassBetweenBnC = variables.maxMassBetweenBnC.value;
    let asteroidGravity = variables.asteroidGravity.value;
    let klCableTension = variables.klCableTension.value;
    let jdDistance = variables.jdDistance.value;
    let abcdeklDistance = variables.abcdeklDistance.value;
    let efDistance = variables.efDistance.value;

    let p1 = (lampMass * asteroidGravity) / 2;
    let p2 = (maxMassBetweenBnC * asteroidGravity);

    let AJ = Math.hypot(abcdeklDistance * 3, jdDistance);

    let pAH = (p1 * AJ) / jdDistance;
    let pAB = (pAH * abcdeklDistance * 3) / AJ;

    let pKLy = klCableTension * Math.cos(45 * (Math.PI / 180));

    let Fk = Math.hypot(abcdeklDistance, abcdeklDistance + efDistance);

    let pGK = pKLy * (Fk / 2);

    return {
        tensions: {
            pAB: pAB,
            pGK: pGK
        }
    };
};


let sceneOneExerciseThreeData = (variables) => {
    let adCableTension = variables.adCableTension.value;

    let distances = {
        x: variables.xDistance.value,
        y: variables.yDistance.value,
        z: variables.zDistance.value 
    };
    let OB = variables.obDistance.value;

    let squareSum = Object.values(distances)
                        .reduce((acum, dist) => acum + Math.pow(dist, 2), 0);

    let sides = {
        OB: OB,
        AD: Math.sqrt(squareSum),
        AB: Math.hypot(OB, distances.z)
    };

    let tADy = adCableTension * (distances.y / sides.AD);
    let tADz = (adCableTension * distances.z) / sides.AD;
    let tAB = (2 * tADy) / (OB / sides.AB);
    let tABz = tAB * (distances.z / sides.AB);

    let tensions = {
        tADy: tADy,
        tADz: tADz,
        tABz: tABz,
        tAB: tAB
    };

    return tensions;
};

export const physicsHelper = {
    scenario: {
        1: {
            exercise: {
                1: {
                    getEachCableTension: (response, variables) => {  
                        let data = sceneOneExerciseOneData(variables);
                        return validateErrorMargin(response, data.tensions.GE, 0.8);
                    },
                    getTGETensionRectangularComponent: (response, variables) => {  
                        let data = sceneOneExerciseOneData(variables);
                        return validateRectangularComponents(getRectangularComponentsArr(response), data.rectangularComponents.TGE, 0.5);
                    },
                    getTGDTensionRectangularComponent: (response, variables) => {
                        let data = sceneOneExerciseOneData(variables);
                        return validateRectangularComponents(getRectangularComponentsArr(response), data.rectangularComponents.TGD, 0.5);
                    }
                },
                2: {
                    getABAxial: (response, variables) => {
                        let data = sceneOneExerciseTwoData(variables);
                        return validateErrorMargin(response, data.tensions.pAB, 8);
                    },
                    getGKAxial: (response, variables) => {
                        let data = sceneOneExerciseTwoData(variables);
                        return validateErrorMargin(response, data.tensions.pGK, 8);
                    },
                    getICAxial: (response, variables) => {
                        return response === 0;
                    }
                },
                3: {
                    getCableTensionAB: (response, variables) => {
                        let data = sceneOneExerciseThreeData(variables);
                        return validateErrorMargin(response, data.tAB, 10);
                    },
                    getCableTensionAC: (response, variables) => response === variables.adCableTension.value,
                    getVerticalReactionInB: (response, variables) => {
                        let data = sceneOneExerciseThreeData(variables);
                        return validateErrorMargin(response, (2 * data.tADz) + data.tABz, 10);
                    }
                }
            }
        } 
    }
}


