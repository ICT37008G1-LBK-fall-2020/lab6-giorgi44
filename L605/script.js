

var students = [
    { FirstName: 'ლევანი', LastName: 'ლატარია', PersonalNumber: '222' },
    { FirstName: 'ლიკა', LastName: 'ჭიღლაძე', PersonalNumber: '223' },
    { FirstName: 'ნიკა', LastName: 'მიროტაძე', PersonalNumber: '224' }
];

function displayStudentsTable(studentList) {
    let table = document.createElement('table');
    let head = document.createElement('thead');
    let row = document.createElement('tr');
    let tbody = document.createElement('tbody');

    Object.keys(studentList[0]).forEach(el => {
        headerData = el.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
        let th = document.createElement('th');
        th.innerHTML = headerData;
        row.appendChild(th);
    });

    head.appendChild(row);
    table.appendChild(head);

    studentList.forEach(el => {
        let row = document.createElement('tr');
        Object.values(el).forEach(data => {
            let td = document.createElement('td');
            td.innerHTML = data;
            row.appendChild(td);
        })
        tbody.appendChild(row);
    })

    table.appendChild(tbody);
    document.getElementById('student-list').append(table);
    table.setAttribute("border", "1");      
    table.style.borderCollapse = 'collapse';
}


displayStudentsTable(students);