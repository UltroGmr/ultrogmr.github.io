let responses = [
    "figure it out yourself",
    "okay..... hold on...... i am...... going to...... help yuou",
    "chords have notes in them. does this help at all",
]

function helpButton() {
    alert(responses[ Math.floor(Math.random() * responses.length) ]);
}