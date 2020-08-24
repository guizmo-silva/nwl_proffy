const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    //Inserir Dados
    proffyValue = {
        name: "Guilherme Silva",
        avatar:"https://avatars2.githubusercontent.com/u/35342672?s=460&u=48d3b05c7e41bf3708a871a4ee36d65fe34e0c1c&v=4",
        whatsapp:"13997527694",
        bio:"Estudante de Análise e Desenvolvimento de Sistemas da FATEC - Rubens Lara.",        
    }

    classValue = {
        subject: 1,
        cost:"20",
        //proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220,
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar Dados

    // Todos os Proffys
    // const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //Consultar as classes de um determinado professor e trazer junto os dados dele
    // const selectClassesAndProffys = await db.all(`
    //     SELECT classes.*, proffys.*
    //     FROM proffys
    //     JOIN classes ON (classes.proffy_id = proffys.id)
    //     WHERE classes.proffy_id = 1;
    // `)
    
    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "1220"
    `)

    console.log(selectClassesSchedules)
})

