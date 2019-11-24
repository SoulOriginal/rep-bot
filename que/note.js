//ADD NOTE
const con = {}; //your connection to mongo
module.exports.run = async(bot, message, args) => {
    const notes = con.collection('notes');
    notes.updateOne({ uid: message.author.id }, { $push: { notes: args.join(' ') } })
}

module.exports.help = {
    name: "addnote"
}

//GET NOTES
module.exports.run = async(bot, message, args) => {
    const notes = con.collection('notes');
    const user = await notes.findOne({ uid: message.author.id });
    message.channel.send(user.notes.map(n => `${n}\n`))
}

module.exports.help = {
    help: "notes"
}