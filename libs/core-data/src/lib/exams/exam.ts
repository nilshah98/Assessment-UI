export interface Exam {
    id: String;
    title: String;
    description: String;
    questions: Array<{
        "id": "",
        "description": "",
        "options": String[],
        "response": Number
    }>;
}