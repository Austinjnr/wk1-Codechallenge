const Grade = (score) => {
    let letterGrade;
    if (score > 79 ) {
      letterGrade = "A";
    } else if (score > 60 ) {
      letterGrade = "B";
    } else if (score > 49 ) {
      letterGrade = "C";
    } else if (score > 40 ) {
      letterGrade = "D";
    } else {
      letterGrade = 'E'
  }
    return `Your grade is ${letterGrade}`;
  }
  console.log(Grade (65));
