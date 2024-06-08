const { user } = require("../dB/user");
const cron = require("node-cron");
const moment = require("moment");

async function removetrash(req, res, next) {
    const { id, email } = req.body;
    const userr = await user.findOne({ email });
    const index = userr.trash.findIndex(note => note.id === id);
    const timeto = userr.trash[index].removetime;

    const removeDateTime = moment(timeto);
    const schedule = {
        minute: removeDateTime.minute(),
        hour: removeDateTime.hour(),
        day: removeDateTime.date(),
        month: removeDateTime.month() + 1 
    };

    console.log("Scheduled to remove note at:", removeDateTime.format());
    if (cron.validate(`${schedule.minute} ${schedule.hour} ${schedule.day} ${schedule.month} *`)) {
        const it = cron.schedule(`${schedule.minute} ${schedule.hour} ${schedule.day} ${schedule.month} *`, async () => {
            await user.updateOne(
                { email: email },
                { $pull: { trash: { id: id } } }
            );
            it.stop(); 
        });
    } else {
        console.error("Invalid cron schedule.");
    }
}

module.exports = {
    removetrash
};
