
//Given the simplicity of this, I used an AI to generate by giving it the document as reference

function getMatchTo(matchTo) {
    switch (matchTo) {
        case '1':
            return 'Main Applicant';
        case '2':
            // return 'Alias of Main Applicant';
            return 'Main Applicant';
        case '3':
            // return 'Association of Main Applicant';
            return 'Main Applicant (Association)';
        case '5':
            return 'Joint Applicant';
        case '6':
            // return 'Alias of Joint Applicant';
            return 'Joint Applicant';
        case '7':
            // return 'Association of Joint Applicant';
            return 'Joint Applicant (Association)';
        case '9':
            return 'No Match';
        default:
            return 'Unknown matchTo';
    }
}


export default getMatchTo;