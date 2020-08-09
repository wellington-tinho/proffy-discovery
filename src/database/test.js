const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db)=>{
    proffyValue={
        name: "Mayk Brito",
        avatar: "https://github.com/maykbrito.png", 
        whatsapp: "900000000", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
        
    },
    classValue={
        subject: 1, 
        cost: "20", 
       //proffy id pelo banco de dados
    },
    classScheduleValues=[
        //class_id virá pelo banco de daos
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1200
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1200
        }
    ]
    // await createProffy(db,{proffyValue,classValue,classScheduleValues})

    const selectedProffy = await db.all("SELECT * FROM proffys")
    
    const selectClassAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassAndProffys);

    const selectClassSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "1199"
    `)

    // console.log(selectClassSchedules);
})