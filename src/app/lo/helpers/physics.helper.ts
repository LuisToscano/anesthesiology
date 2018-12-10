import { truncateDecimal } from '../../core/constants/utils.constant';

function validateRoundAndTruncate(response : number, value : number, decimals : number) {
    return response === truncateDecimal(value, decimals) ||
        value === parseFloat(value.toFixed(decimals));
}

export const physicsHelper = {
    getRectangularComponentforTension: (response, hexagonSide, tieDownDistance, hexagonWeight, asteroidGravity) => {  
        let cableLength = Math.hypot(hexagonSide * 100, tieDownDistance);
        let w = hexagonWeight * asteroidGravity;
        let answer = (w * cableLength) / (3 * tieDownDistance);
        return validateRoundAndTruncate(response, answer, 2);
    }
}


