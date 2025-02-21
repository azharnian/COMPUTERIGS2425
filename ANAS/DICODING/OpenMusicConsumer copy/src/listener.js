class Listener {
    constructor(playlistsService, mailSender) {
        this.playlistsService = playlistsService;
        this._mailSender = mailSender;

        this.listen = this.listen.bind(this);
    }

    async listen(message) {
        try {
            const { playlistId, targetEmail } = JSON.parse(
                message.content.toString()
            );

            const data = await this.playlistsService.getPlaylistSongs(playlistId);
            const result = await this._mailSender.sendEmail(
                targetEmail,
                data.playlist.name,
                JSON.stringify(data)
            );
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = Listener;