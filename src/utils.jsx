export default function computeAlbumDuration(songs) {
    let total_secs = 0
    songs.forEach(
        (song) => {
            let comp = song.length.split(':')
            total_secs += parseInt(comp[0]) * 60 + parseInt(comp[1]);
        }
    )

    let total_mins = Math.trunc(total_secs / 60);
    let remaining_secs = total_secs - total_mins * 60;

    return `${total_mins}m ${remaining_secs}s`;
}
