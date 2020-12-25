var g_canvas = document.getElementById("myCanvas")
var g_context = g_canvas.getContext("2d")
var g_canvasBounds = g_canvas.getBoundingClientRect();
var g_FPS = 30
var g_timeInterval = 1000/g_FPS
var g_canvasWidth = g_canvas.width
var g_canvasHeight = g_canvas.height
var g_rows = 4
var g_columns = 4
var g_NumOfTiles = g_rows * g_columns
var g_tileArray = new Array(g_rows)
var g_seconds = 0;
var g_minutes = 0;
var g_hours = 0;
var g_frameCounter = 0;
var g_score = 0;
var g_neighbourArray = new Array(4)
var g_XtoSwap = null
var g_ytoSwap = null
var g_indexToSwap = null
var g_swap = false
var g_nullTileRow;
var g_start = false;
var g_nullTileColumn;
var g_PresentTileRow;
var g_presentTileColumn;
var g_indices = new Array(15)
var g_won = false;
var g_difficulty = 100; 
var g_shuffle = true
f_createTileArray();
f_setLastTileBlank();

function f_clearCanvas() 
{
    g_context.fillStyle = "black"
    g_context.fillRect(0, 0, g_canvasWidth, g_canvasHeight)
    g_context.strokeRect(0,0,g_canvasWidth,g_canvasHeight)
}

function c_tile(l_x,l_y,l_w,l_h,l_c,l_i,l_row,l_column)
{
    this.x = l_x;
    this.y = l_y;
    this.w = l_w;
    this.h = l_h;
    this.c = l_c;
    this.i = l_i;
    this.row = l_row
    this.column = l_column
    this.swap = false;
    this.type = "tile"

    this.m_draw = function m_draw(l_ctx)
    {
        l_ctx.fillStyle = this.c
        l_ctx.font = "20px Impact"
        l_ctx.strokeStyle = "white"
        l_ctx.strokeRect(this.x, this.y, this.w, this.h)
        if (this.type != null) l_ctx.fillText(this.i+1,this.x+this.w/3,this.y+this.h/2)
    }
}

function f_createTileArray() 
{
    var l_x = g_canvasWidth/3;
    var l_y = g_canvasHeight/5;
    var l_i = 0;
    var l_w = 60;
    var l_h = 60;
    for (j = 0; j < g_rows; j++) {
        g_tileArray[j] = new Array(g_columns)
        for(i=0;i<g_columns;i++)
        {
            g_tileArray[j][i]= new c_tile(l_x,l_y,l_w,l_h,"blue",l_i,j,i)
            l_i++;
            l_x += l_w;
        }
        l_x=g_canvasWidth/3;
        l_y+=l_h
    }
}

function f_storeValues()
{
    var l_i =0;
    var l_j =0;
    for(l_j=0;l_j<g_rows;l_j++)
    {
        for(l_i=0;l_i<g_columns;l_i++)
        {
            g_indices.push(g_tileArray[l_j][l_i].i)
        }
    }
}
function f_clearValues()
{
    g_indices = []
}
function f_setLastTileBlank() 
{
    g_tileArray[g_rows - 1][g_columns - 1].type = null
}
function f_drawTiles() 
{
    for (j = 0; j < g_rows;j++) 
    {
        for (i = 0; i < g_columns; i++)
        {
            g_tileArray[j][i].m_draw(g_context)
        }
    }
}
function f_calculateTime() 
{
    g_frameCounter++
    
    if (g_frameCounter >= g_FPS && !g_won&&g_start) 
    {                
        g_seconds++;
        g_frameCounter =0;
        if (g_seconds >= 60) 
        {
            g_minutes++
            g_seconds =0;
            if (g_minutes >= 60) 
            {
                g_hours++
                g_minutes =0;
            }
        }
    }
}
function f_checkIfWon()
{
    for(i=0;i<g_NumOfTiles;i++)
        {
            if(g_indices[i] != i) 
            {
                g_won = false
                return
            }
        }
    g_won = true
}
function f_findNeighbours() 
{
    for (j = 0; j < g_rows; j++)
    {
        for (i = 0; i < g_columns; i++) 
        {
            if (g_tileArray[j][i].type == null)
            {
                if (j > 0) g_neighbourArray[0] = g_tileArray[j - 1][i]
                else g_neighbourArray[0] = null
                
                if (i > 0) g_neighbourArray[1] = g_tileArray[j][i - 1]
                else  g_neighbourArray[1] = null
                
                if (j < 3) g_neighbourArray[2] = g_tileArray[j + 1][i]
                else g_neighbourArray[2] = null
                
                if (i < 3) g_neighbourArray[3] = g_tileArray[j][i + 1]
                else g_neighbourArray[3] = null
            }
        }
    }
}
function f_printMoves()
{
    g_context.fillStyle ="white"
    g_context.fillText("Moves : "+g_score, g_canvasWidth / 16, g_canvasHeight/12)
}

function f_printTime() 
{
    g_context.fillText("Time :- " + g_hours + " : " + g_minutes + " : " + g_seconds, g_canvasWidth - g_canvasWidth / 4, g_canvasHeight/12)
}
function f_swapTiles()
{
    var l_temp;
    if (g_swap&&!g_won) 
    {
        l_temp = g_tileArray[g_nullTileRow][g_nullTileColumn].x;
        g_tileArray[g_nullTileRow][g_nullTileColumn].x =  g_tileArray[g_PresentTileRow][g_presentTileColumn].x
        g_tileArray[g_PresentTileRow][g_presentTileColumn].x = l_temp

        l_temp = g_tileArray[g_nullTileRow][g_nullTileColumn].y
        g_tileArray[g_nullTileRow][g_nullTileColumn].y = g_tileArray[g_PresentTileRow][g_presentTileColumn].y
        g_tileArray[g_PresentTileRow][g_presentTileColumn].y = l_temp

        l_temp = g_tileArray[g_nullTileRow][g_nullTileColumn].row
        g_tileArray[g_nullTileRow][g_nullTileColumn].row =  g_tileArray[g_PresentTileRow][g_presentTileColumn].row
        g_tileArray[g_PresentTileRow][g_presentTileColumn].row = l_temp;

        l_temp = g_tileArray[g_nullTileRow][g_nullTileColumn].column
        g_tileArray[g_nullTileRow][g_nullTileColumn].column = g_tileArray[g_PresentTileRow][g_presentTileColumn].column
        g_tileArray[g_PresentTileRow][g_presentTileColumn].column = l_temp

        l_temp = g_tileArray[g_nullTileRow][g_nullTileColumn]
        g_tileArray[g_nullTileRow][g_nullTileColumn] =  g_tileArray[g_PresentTileRow][g_presentTileColumn]
        g_tileArray[g_PresentTileRow][g_presentTileColumn] = l_temp;
        g_swap = false
        if(g_shuffle == false) g_score++
    }
}
function f_findNullTile()
{
    for (j = 0; j < g_rows; j++)
    {
        for (i = 0; i < g_columns; i++) 
        {
            if (g_tileArray[j][i].type == null)
            {
                g_nullTileRow = g_tileArray[j][i].row;
                g_nullTileColumn = g_tileArray[j][i].column
            }
        }
    }
}
function f_presentTileFinder()
{
    g_PresentTile = parseInt(Math.random()*(g_neighbourArray.length))
    if(g_neighbourArray[g_PresentTile] == null) f_presentTileFinder()
}
function f_shuffle()
{
    var l_moves =0;
    
    if(g_shuffle)
    {
        for(b=10;b>0;b--)
        {
            f_findNullTile()
            f_findNeighbours()
            g_PresentTile = parseInt(Math.random()*(g_neighbourArray.length))
            if(g_neighbourArray[g_PresentTile]==null) f_presentTileFinder()
            g_PresentTileRow = g_neighbourArray[g_PresentTile].row
            g_presentTileColumn = g_neighbourArray[g_PresentTile].column
            g_swap = true
            f_swapTiles()
            g_swap = false
            console.log(l_moves++)
        }
    }
    g_shuffle =false
}
function f_gameOver()
{
    if(g_won) 
    {
        f_clearCanvas()
        g_context.fillStyle = "white"
        g_context.font = '40px impact'
        g_context.fillText("You Won",g_canvasWidth/3,g_canvasHeight/2)
        g_context.font = '20px impact'
        g_context.fillText("Your moves : "+g_score,g_canvasWidth/3,g_canvasHeight/2+50)
        g_context.fillText("Time :- " + g_hours + " : " + g_minutes + " : " + g_seconds, g_canvasWidth/3, g_canvasHeight/2+70)
    }
}
function f_gameLoop() 
{
    f_shuffle()
    f_findNullTile()
    f_findNeighbours()
    f_calculateTime()
    f_swapTiles()
    f_storeValues()
    f_checkIfWon()
    f_clearValues()
    f_clearCanvas()
    f_drawTiles()
    f_printMoves()
    f_printTime()
    f_gameOver()
}
setInterval(f_gameLoop, g_timeInterval)
document.addEventListener("mousedown", f_mouseDownEventHandler)

function f_mouseDownEventHandler(l_event) 
{
    var l_x = l_event.clientX - g_canvasBounds.left;
    var l_y = l_event.clientY - g_canvasBounds.top;
    
    for (i = 0; i < g_neighbourArray.length; i++)
    {
        if (g_neighbourArray[i] != null)
        {
            if (l_x > g_neighbourArray[i].x && l_x < g_neighbourArray[i].x + g_neighbourArray[i].w && l_y > g_neighbourArray[i].y && l_y < g_neighbourArray[i].y + g_neighbourArray[i].h)
            {
                g_neighbourArray[i].swap = true
                g_swap = true
                g_PresentTileRow = g_neighbourArray[i].row
                g_presentTileColumn = g_neighbourArray[i].column
                g_start = true
            }
        }
    }
}