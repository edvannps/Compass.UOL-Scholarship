
let grade = prompt('Digite a note do(a) aluno(a): ');

if (grade > 100) {
  alert('Nota inválida!');
} else if (grade >= 90) {
    alert('Aluno(a) nota A');
} else if (grade >= 80) {
    alert('Aluno(a) nota B');
} else if (grade >= 70) {
    alert('Aluno(a) nota C');
} else if (grade >= 60) {
    alert('Aluno(a) nota D');
} else {
    alert('Aluno(a) nota F');
}
