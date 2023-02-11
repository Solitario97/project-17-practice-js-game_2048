    export class Cell {
        constructor(gridElement, x, y) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            gridElement.append(cell);
            this.x = x;
            this.y = y;
        }

        linkTile(tile) {
            tile.setXY(this.x, this.y);
            this.linkedTile = tile;
        }

        unlinkTile() {
            this.linkTile = null;
        }

        isEpmty() {
            return !this.linkedTile;
        }

        linkTileForMerge(tile) {
            tile.setXY(this.x, this.y);
            this.linkTileForMerge = tile;
        }

        hasTileForMerge() {
           return !!this.linkedTileForMerge; 
        }

        canAccept(newTile) {
            return this.isEpmty() || (!this.hasTileForMerge() && this.linkedTile.value === newTile.value);
        }
    }