export interface Exam {
    id: String;
    title: String;
    description: String;
    questions: Array<{
        "id": "",
        "description": "",
        "options": Array<{"data": ""}>
    }>;
}