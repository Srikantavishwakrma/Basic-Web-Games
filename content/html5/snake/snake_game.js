var g_canvas = document.getElementById("myCanvas")
var g_context = g_canvas.getContext("2d")
var g_canvasWidth = g_canvas.width
var g_canvasHeight = g_canvas.height
var g_canvasBounds = g_canvas.getBoundingClientRect();
var g_FPS = 30
var g_timeInterval = 1000/g_FPS
var g_moveDown = false
var g_moveUp = false
var g_moveLeft = false
var g_moveRight = false
var g_snake = new c_snake(g_canvasWidth/4,g_canvasHeight/4+100,10,"red")
var g_powerUP = new c_powerUP(750,350,5)
var g_snake2 = new c_snake(g_canvasWidth/4,g_canvasHeight*3/4,10,"blue")
var g_ate = false
var g_score = 0
var g_mainMenu = new c_mainMenu()
var g_gameScreen = new c_gamePlay()
var g_instructionsScreen = new c_instructionsScreen()
var g_gameOver = false
var g_timeCounter = 0
var g_frameCounter = 0   

g_snake.m_init()
g_snake2.m_init()
g_snake.cellArray[0].c = "green"
g_snake2.cellArray[0].c = 'white'

function f_clearCanvas()
{
    g_context.fillStyle = "black"
    g_context.fillRect(0,0,g_canvasWidth,g_canvasHeight)

    if(g_gameScreen.isPresentScreen)
    {
        g_context.strokeStyle = "yellow"
        g_context.strokeRect(1,100,g_canvasWidth-2,g_canvasHeight-101)
    }
}

function c_mainMenu()
{
    this.startButton= new c_Button(300,300,200,30,"Start")
    this.instructionsButton = new c_Button(300,350,200,30,"Instructions")
    this.isPresentScreen = true

    this.m_draw = function m_draw(l_ctx)
    {
        if(this.isPresentScreen) {
            l_ctx.fillStyle = "black"
            l_ctx.font = "30px Arial"
            l_ctx.fillText("Main Menu",330,100)
        }
    }
}
function c_Button(l_x,l_y,l_w,l_h,l_type)
{
    this.x = l_x;
    this.y = l_y;
    this.w = l_w;
    this.h = l_h;
    this.type = l_type;
    this.clicked = false;

    this.m_draw = function m_draw(l_ctx)
    {
        l_ctx.font = "15px Arial"
        l_ctx.fillStyle = "grey"
        if(this.clicked) l_ctx.fillStyle = "green"
        l_ctx.fillRect(this.x,this.y,this.w,this.h)
        l_ctx.fillStyle ="black"
        l_ctx.fillText(this.type,this.x+this.w/3,this.y+this.h/2)
    }
}
function c_gamePlay()
{
    this.isPresentScreen = false;
    this.gameOver = false
    this.homeButton = new c_Button(20,20,70,70,"Home")

    this.m_draw = function m_draw(l_ctx)
    {
        l_ctx.font = '30px Arial'
        l_ctx.fillStyle = "black"
    }
}
function c_instructionsScreen()
{
    this.isPresentScreen = false
    this.homeButton = new c_Button(20,20,70,70,"Home")

    this.m_writeInstructions = function m_writeInstructions(l_ctx)
    {
        l_ctx.fillStyle = "white"
        l_ctx.font = '20px Arial'
        l_ctx.fillText("- It is a 2 Player game ",20,110)
        l_ctx.fillText("- Use arrow keys for movement of snake 1 ",20,130)
        l_ctx.fillText("- Use WASD keys for movement of snake 2 ",20,150)
        l_ctx.fillText("- Blue powerup Increases length by 10",20,170)
        l_ctx.fillText("- Green powerup Increases speed by 15 ",20,190)
        l_ctx.fillText("- Yellow powerup decreases length to 10 ",20,210)
        l_ctx.fillText("- Red powerup decreases speed to 7 ",20,230)            
    }
}
function f_UIManager()
{
    if(g_mainMenu.startButton.clicked) g_gameScreen.isPresentScreen = true
    else g_gameScreen.isPresentScreen = false

    if(g_gameScreen.isPresentScreen) g_mainMenu.isPresentScreen = false
    else  g_mainMenu.isPresentScreen = true

    if(g_gameScreen.homeButton.clicked)
    {
        location.reload();
    }

    if(g_mainMenu.instructionsButton.clicked) g_instructionsScreen.isPresentScreen = true
    else g_instructionsScreen.isPresentScreen = false

    if(g_instructionsScreen.isPresentScreen)
    {
        g_gameScreen.isPresentScreen =false
        g_mainMenu.isPresentScreen = false

        if(g_instructionsScreen.homeButton.clicked)  
        {
            g_mainMenu.isPresentScreen = true
            g_instructionsScreen.isPresentScreen = false
            g_mainMenu.instructionsButton.clicked = false
            g_instructionsScreen.homeButton.clicked = false
        }
    }
}

function f_screenObjHandler()
{
    if(g_mainMenu.isPresentScreen)
    {
        g_mainMenu.instructionsButton.m_draw(g_context)
        g_mainMenu.startButton.m_draw(g_context)
    }

    if(g_gameScreen.isPresentScreen)
    {
        g_gameScreen.homeButton.m_draw(g_context)
    }

    if(g_instructionsScreen.isPresentScreen)
    {
        g_instructionsScreen.homeButton.m_draw(g_context)
        g_instructionsScreen.m_writeInstructions(g_context)
    }
}
function c_snake(l_x,l_y,l_length,l_c){
    this.x = l_x
    this.y = l_y
    this.c = l_c
    this.moveLeft = false
    this.moveRight = false
    this.moveTop = false
    this.moveBottom = false
    this.speed = 7
    this.snakeCellSize = 5;
    this.length = l_length
    this.maxSnakeLength = 50
    this.maxArrayLength = this.maxSnakeLength*this.snakeCellSize*2
    this.presentArrayLength = this.length*this.snakeCellSize*2
    this.cellArray = new Array(this.maxLength)
    this.addCells = true
    this.xPosArr = new Array(this.maxArrayLength)
    this.yPosArr = new Array(this.maxArrayLength)
    this.isAlive = true
    this.score = 0;
    var l_xpos = l_x
    this.ate = false
    this.win = false

    this.m_init = function m_init()
    {
        for(i=0;i<this.maxSnakeLength;i++)            
        {
           this.cellArray[i] = new c_cell(this.x,this.y,this.snakeCellSize,this.c)
           this.x -=this.snakeCellSize*2
        }

        for(i=0;i<this.maxArrayLength;i++)
        {
            this.xPosArr[i] = l_xpos--;
            this.yPosArr[i] = this.y;
        }
    }
    this.m_draw = function m_draw(l_ctx)
    {
        for(i=0;i<this.length;i++)
        {
             this.cellArray[i].m_draw(l_ctx)
        }
    }

    this.m_updateSnake = function m_updateSnake()
    {
        var l_j = 0;
        for(i=0;l_j<this.length;i+=this.snakeCellSize*2)
        {
            this.cellArray[l_j].x =this.xPosArr[i]
            this.cellArray[l_j].y =this.yPosArr[i]
            l_j++
        }
    }
    this.m_checkEating = function m_checkEating(l_food)
    {
        for(i=0;i<this.presentArrayLength;i++)
        {
            if(Math.abs(l_food.x-this.xPosArr[i])<=this.snakeCellSize+l_food.r&&Math.abs(l_food.y-this.yPosArr[i])<=this.snakeCellSize+l_food.r)
            {
                this.ate = true
                break;
            }
        }

        if(this.ate)
        {
                this.score++
                l_food.x = -50
                l_food.y = -20
                this.ate =false

                if(l_food.c == "blue")
                {
                    this.length+=10
                    this.presentArrayLength += this.snakeCellSize*2*(this.length-10)
                }

                if(l_food.c == "yellow") 
                {
                    this.length = 10
                    this.presentArrayLength = (this.snakeCellSize*2*this.length)
                }                    

                if(l_food.c == "green")
                {
                    this.speed+=15
                }

                if(l_food.c == "red") 
                {
                    this.speed = 7
                }
            }
    }
    this.m_checkBoundaryCollison =  function f_checkCollision(l_cnvs){
        if(this.xPosArr[0]+this.snakeCellSize >=l_cnvs.width)
        {
            this.xPosArr[0] =l_cnvs.width-this.snakeCellSize
            this.isAlive = false
        }
        if(this.yPosArr[0]+this.snakeCellSize >=l_cnvs.height) 
        {
            this.yPosArr[0] =  l_cnvs.height-this.snakeCellSize-1
            this.isAlive = false
        }
        if(this.xPosArr[0]-this.snakeCellSize<=0) 
        {
            this.xPosArr[0] = this.snakeCellSize
            this.isAlive = false
        }
        if(this.yPosArr[0]-this.snakeCellSize<=100) 
        {
            this.yPosArr[0] = this.snakeCellSize+101
            this.isAlive = false
        }
    }
    this.m_sameSnakeCollison = function m_sameSnakeCollison()
    {
        for(i=10;i<=this.length;i++)
        { 
            if(this.cellArray[0].x == this.cellArray[i].x&&this.cellArray[0].y ==this.cellArray[i].y)
            {
                this.isAlive = false
            }
        }
    }
    this.m_otherSnakeCollison = function m_otherSnakeCollison(snake)
    {
        for(i=5;i<=snake.presentArrayLength;i++)
        {
            if( Math.abs(this.cellArray[0].x - snake.xPosArr[i])<this.snakeCellSize*2 && Math.abs(this.cellArray[0].y- snake.yPosArr[i])<this.snakeCellSize*2)
            {
                this.isAlive = false
            }
        }
    }
    this.m_moveSnake = function m_moveSnake(){
        if(this.isAlive)
        {
            if(this.cellArray[0].x>this.cellArray[1].x)this.moveLeft = false
            if(this.cellArray[0].y>this.cellArray[1].y)this.moveTop = false
            if(this.cellArray[0].x<this.cellArray[1].x)this.moveRight =false
            if(this.cellArray[0].y<this.cellArray[1].y)this.moveBottom = false

            if(this.moveLeft || this.moveRight || this.moveTop || this.moveBottom)
            {
                for(j=this.speed; j>0; j--)
                {
                    if(this.moveLeft)
                    {
                         this.xPosArr[0]--;
                    }

                    if(this.moveTop)
                    {
                         this.yPosArr[0]--;
                    }

                    if(this.moveRight)
                    {
                         this.xPosArr[0]++;
                    }

                    if(this.moveBottom)
                    {
                        this.yPosArr[0]++;
                    }

                    for(i= this.xPosArr.length - 1; i > 0 ; i--)
                    {
                        this.xPosArr[i] = this.xPosArr[i - 1];
                        this.yPosArr[i] = this.yPosArr[i - 1];
                    }
                }
            }
        }
    }
}

function c_cell(l_x,l_y,l_r,l_c)
{
    this.x = l_x
    this.y = l_y
    this.r = l_r
    this.c = l_c

    this.m_draw = function m_draw(l_ctx)
    {
        l_ctx.beginPath()
        l_ctx.fillStyle = this.c
        l_ctx.arc(this.x,this.y,this.r,0,Math.PI*2)
        l_ctx.fill()
        l_ctx.closePath()
    }
}
function c_powerUP(l_x,l_y,l_r)
{
    this.x = l_x
    this.y = l_y
    this.r = l_r
    this.colorArray = ["green","red","blue","yellow"]
    this.c = "yellow"
    this.respawn = false

    this.m_draw = function m_draw(l_ctx)
    {
        l_ctx.beginPath()
        l_ctx.fillStyle = this.c
        l_ctx.arc(this.x,this.y,this.r,0,Math.PI*2)
        l_ctx.fill()
        l_ctx.closePath()
    }
    this.m_respawn = function m_respawn(l_cnvs)
    {
        if(this.respawn)
        {
            this.c = this.colorArray[parseInt(Math.random()*this.colorArray.length)]
            this.x = this.r+(Math.random()*(l_cnvs.width-(2*this.r)))
            this.y = 100+this.r+(Math.random()*(l_cnvs.height-(2*this.r)-100))
            this.respawn = false;
        }
    }
}

function f_findDistance(l_x1,l_y1,l_x2,l_y2)
{
    var l_distance = Math.sqrt(Math.pow(l_x1-l_x2,2)+Math.pow(l_y1-l_y2,2))
    return l_distance;
}

function f_printScore()
{
    g_context.font = '30px Tahoma'
    g_context.fillStyle = 'white'
    g_context.fillText("Snake 1 : "+g_snake.score,150,50)
    g_context.fillText("Snake 2 : "+g_snake2.score,500,50)
}
function f_printGameOver()
{
    if(g_gameOver)
    {
        g_context.clearRect(0,100,g_canvasWidth,g_canvasHeight-100)
        g_context.fillText("Game Over",300,300)
        if(g_snake.win&&!g_snake2.win) g_context.fillText("player One wins",300,350)
        if(g_snake2.win&&!g_snake.win) g_context.fillText("player Two wins",300,350)
        if(g_snake.win&&g_snake2.win) g_context.fillText("Match draw",300,350)
    }
}
function f_CheckGameOver()
{            
    if(!g_snake.isAlive||!g_snake2.isAlive||g_snake.score>=5||g_snake2.score>=5)
    {
        g_gameOver = true
        if(!g_snake.isAlive) g_snake2.win = true
        if(!g_snake2.isAlive) g_snake.win = true
        if(g_snake.score>=10)g_snake.win = true
        if(g_snake2.score>=10) g_snake2.win = true
    }
}

function f_timeCalculator()
{
    g_frameCounter++

    if(g_frameCounter>=g_FPS)
    {
        g_timeCounter++
        g_frameCounter = 0;

        if(g_timeCounter>=5)
        {
            g_timeCounter = 0;
            g_powerUP.respawn = true
        }
    }
}
function f_gameLoop()
{
    f_UIManager()
    f_clearCanvas()
    f_screenObjHandler()
    g_mainMenu.m_draw(g_context)
    g_gameScreen.m_draw(g_context)

    if(g_gameScreen.isPresentScreen)
    {
        f_CheckGameOver()
        f_timeCalculator()
        g_snake.m_moveSnake()
        g_snake2.m_moveSnake()
        g_snake.m_checkEating(g_powerUP)
        g_snake2.m_checkEating(g_powerUP)
        g_snake.m_sameSnakeCollison()
        g_snake2.m_sameSnakeCollison()
        g_snake.m_otherSnakeCollison(g_snake2)
        g_snake2.m_otherSnakeCollison(g_snake)
        g_powerUP.m_respawn(g_canvas)
        g_snake.m_updateSnake()
        g_snake2.m_updateSnake()
        g_snake.m_checkBoundaryCollison(g_canvas)
        g_snake2.m_checkBoundaryCollison(g_canvas)
        f_clearCanvas()
        g_snake.m_draw(g_context)
        g_snake2.m_draw(g_context)
        g_powerUP.m_draw(g_context)
        g_gameScreen.homeButton.m_draw(g_context)
        g_gameScreen.m_draw(g_context)
        f_printGameOver()
        f_printScore()
    }           
}

setInterval(f_gameLoop,g_timeInterval)

document.addEventListener('keydown',f_keydowneventHandler)
document.addEventListener('keyup',f_keyUpEventHandler)
document.addEventListener("mousedown",f_mouseDownEventHandler)

function f_keydowneventHandler(l_event)
{
    switch(l_event.keyCode)
    {
        case 40:
            l_event.preventDefault()
            g_snake.moveBottom = true
            break;
        case 39:
            l_event.preventDefault()
            g_snake.moveRight = true
            break;
        case 38:
            l_event.preventDefault()
            g_snake.moveTop = true
            break;
        case 37:
            l_event.preventDefault()
            g_snake.moveLeft = true
            break;
        case 83:
            g_snake2.moveBottom = true
            break;
        case 68:
            g_snake2.moveRight = true
            break;
        case 87:
            g_snake2.moveTop = true
            break
        case 65:
            g_snake2.moveLeft = true    
    }
}
function f_keyUpEventHandler(l_event)
{
  switch(l_event.keyCode)
  {
        case 40:
            l_event.preventDefault();
            g_snake.moveBottom = false
            break;
        case 39:
            l_event.preventDefault();
            g_snake.moveRight = false
            break;
        case 38:
            l_event.preventDefault();
            g_snake.moveTop = false
            break;
        case 37: 
            l_event.preventDefault();
            g_snake.moveLeft = false
            break;
        case 83:
            g_snake2.moveBottom = false
            break;
        case 68:
            g_snake2.moveRight = false
            break;
        case 87:
            g_snake2.moveTop = false
            break
        case 65:
            g_snake2.moveLeft = false 
    }
}

function f_mouseDownEventHandler(l_event)
{
    var l_x = l_event.clientX - g_canvasBounds.left 
    var l_y = l_event.clientY - g_canvasBounds.top 

    if(g_mainMenu.isPresentScreen)
    {
        if(l_x >= g_mainMenu.startButton.x && l_y > g_mainMenu.startButton.y && l_x < g_mainMenu.startButton.x + g_mainMenu.startButton.w && l_y < g_mainMenu.startButton.y + g_mainMenu.startButton.h)

            g_mainMenu.startButton.clicked = !g_mainMenu.startButton.clicked  

        if(l_x >= g_mainMenu.instructionsButton.x && l_y > g_mainMenu.instructionsButton.y && l_x < g_mainMenu.instructionsButton.x + g_mainMenu.instructionsButton.w && l_y <g_mainMenu.instructionsButton.y+g_mainMenu.instructionsButton.h) 

            g_mainMenu.instructionsButton.clicked = !g_mainMenu.instructionsButton.clicked 
    }  
    if(g_gameScreen.isPresentScreen)
    {
         if(l_x >= g_gameScreen.homeButton.x && l_y > g_gameScreen.homeButton.y && l_x < g_gameScreen.homeButton.x + g_gameScreen.homeButton.w && l_y < g_gameScreen.homeButton.y + g_gameScreen.homeButton.h)

             g_gameScreen.homeButton.clicked = !g_gameScreen.homeButton.clicked
    }
    if(g_instructionsScreen.isPresentScreen)
    {
        if(l_x >= g_instructionsScreen.homeButton.x && l_y > g_instructionsScreen.homeButton.y && l_x < g_instructionsScreen.homeButton.x + g_instructionsScreen.homeButton.w && l_y < g_instructionsScreen.homeButton.y+g_instructionsScreen.homeButton.h) 

            g_instructionsScreen.homeButton.clicked = !g_instructionsScreen.homeButton.clicked
    }

}