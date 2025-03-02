type VacancySettings = {
    name : string | null,
    salary : string,
    requirements : string | TrustedHTML,
    responsibilities : string | TrustedHTML,
    conditions : string | TrustedHTML,
    imgUrl : string,
}

export default VacancySettings