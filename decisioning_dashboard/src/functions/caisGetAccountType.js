
//Given the simplicity of this, I used an AI to generate by giving it the document as reference

function getCAISAccountDescription(accountType) {
    switch (accountType) {
        case '00':
            return 'Bank';
        case '01':
            return 'Hire purchase/Conditional sale';
        case '02':
            return 'Unsecured loan (personal loans etc)';
        case '03':
            return 'Mortgage';
        case '04':
            return 'Budget (revolving account)';
        case '05':
            return 'Credit card/Store card';
        case '06':
            return 'Charge card';
        case '07':
            return 'Rental (TV, brown and white goods)';
        case '08':
            return 'Mail Order';
        case '11':
            return 'Overdraft';
        case '12':
            return 'CML member';
        case '13':
            return 'CML member';
        case '14':
            return 'CML member';
        case '15':
            return 'Current accounts';
        case '16':
            return 'Second mortgage (secured loan)';
        case '17':
            return 'Credit sale fixed term';
        case '18':
            return 'Communications';
        case '19':
            return 'Fixed term deferred payment';
        case '20':
            return 'Variable subscription';
        case '21':
            return 'Public utility';
        case '22':
            return 'Finance lease';
        case '23':
            return 'Operating lease';
        case '24':
            return 'Unpresentable - cheques';
        case '25':
            return 'Flexible Mortgages';
        case '26':
            return 'Consolidated Debt';
        case '27':
            return 'Combined Credit Account';
        case '28':
            return 'Pay Day Loans';
        case '29':
            return 'Balloon HP';
        case '30':
            return 'Residential Mortgage';
        case '31':
            return 'Buy To Let Mortgage';
        case '32':
            return '100+% LTV Mortgage';
        case '33':
            return 'Current Account Offset Mortgage';
        case '34':
            return 'Investment Offset Mortgage';
        case '35':
            return 'Shared Ownership Mortgage';
        case '36':
            return 'Contingency Liability';
        case '37':
            return 'Store Card';
        case '38':
            return 'Multi Function Card';
        case '39':
            return 'Water';
        case '40':
            return 'Gas';
        case '41':
            return 'Electricity';
        case '42':
            return 'Oil';
        case '43':
            return 'Duel Fuel';
        case '44':
            return 'Fuel Card (not motor fuel)';
        case '45':
            return 'House Insurance';
        case '46':
            return 'Car Insurance';
        case '47':
            return 'Life Insurance';
        case '48':
            return 'Health Insurance';
        case '49':
            return 'Card Protection';
        case '50':
            return 'Mortgage Protection';
        case '51':
            return 'Payment Protection';
        case '52':
            return 'Tax';
        case '53':
            return 'Mobile';
        case '54':
            return 'Fixed Line';
        case '55':
            return 'Cable';
        case '56':
            return 'Satellite';
        case '57':
            return 'Business Line';
        case '58':
            return 'Broadband';
        case '59':
            return 'Multi Communications';
        case '60':
            return 'Student Loan';
        case '61':
            return 'Home Credit';
        case '62':
            return 'Education';
        case '63':
            return 'Property Rental';
        case '64':
            return 'Other Rental';
        case '65':
            return 'Fines';
        case '66':
            return 'Court Actions';
        case '67':
            return 'Child Maintenance';
        case '68':
            return 'Asset';
        case '69':
            return 'Mortgage and Unsecured Loan';
        case '70':
            return 'Gambling';
        default:
            return 'Unknown AccountType';
    }
}


export default getCAISAccountDescription;