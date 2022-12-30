import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
createApp({
    data() {
        return {
            grid: [
                {
                    id: 1,
                    isCross: false,
                    isToe: false,
                    position: 'top_left'
                },
                {
                    id: 2,
                    isCross: false,
                    isToe: false,
                    position: 'center_top'
                },
                {
                    id: 3,
                    isCross: false,
                    isToe: false,
                    position: 'top_right'
                },
                {
                    id: 4,
                    isCross: false,
                    isToe: false,
                    position: 'center_left'
                },
                {
                    id: 5,
                    isCross: false,
                    isToe: false,
                    position: 'center'
                },
                {
                    id: 6,
                    isCross: false,
                    isToe: false,
                    position: 'center_right'
                },
                {
                    id: 7,
                    isCross: false,
                    isToe: false,
                    position: 'bottom_left'
                },
                {
                    id: 8,
                    isCross: false,
                    isToe: false,
                    position: 'center_bottom'
                },
                {
                    id: 9,
                    isCross: false,
                    isToe: false,
                    position: 'bottom_right'
                },
            ],
            count: 0,
            crossWins: false,
            toeWins: false,
        }
    },
    methods: {
        addFigure(index) {
            if (!this.grid[index].isCross && !this.grid[index].isToe) {
                // each time a cell is clicked the figure changes
                this.count++;
                if (this.count % 2 === 0) {
                    this.grid[index].isToe = true;
                    this.checkWin('isToe');
                } else {
                    this.grid[index].isCross = true;
                    this.checkWin('isCross');
                }
            }


        },
        checkWin(string) {
            // checks if 3 figures are in column
            for (let i = 0; i < 3; i++) {
                if (this.grid[i][string] && this.grid[i + 3][string] && this.grid[i + 6][string]) {
                    if (string === 'isCross') {
                        this.crossWins = true;
                    } else {
                        this.toeWins = true;
                    }
                }
            }
            // checks if 3 figures are in a row
            for (let i = 0; i <= 6; i += 3) {
                if (this.grid[i][string] && this.grid[i + 1][string] && this.grid[i + 2][string]) {
                    if (string === 'isCross') {
                        this.crossWins = true;
                    } else {
                        this.toeWins = true;
                    }
                }
            }
            // checks if 3 figures are in oblique
            for (let i = 0; i < 3; i += 2) {
                if (i === 0) {
                    if (this.grid[i][string] && this.grid[i + 4][string] && this.grid[i + 8][string]) {
                        if (string === 'isCross') {
                            this.crossWins = true;
                        } else {
                            this.toeWins = true;
                        }
                    }
                } else {
                    if (this.grid[i][string] && this.grid[i + 2][string] && this.grid[i + 4][string]) {
                        if (string === 'isCross') {
                            this.crossWins = true;
                        } else {
                            this.toeWins = true;
                        }
                    }
                }
            }


        },
        reset() {
            this.count = 0;
            this.crossWins = false;
            this.toeWins = false;
            this.grid.forEach(cell => {
                cell.isCross = false;
                cell.isToe = false;
            });


        }

    }
}).mount('#app')