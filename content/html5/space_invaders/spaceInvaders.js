var g_player = [0,0,0,0,1,1,0,0,0,0,
                0,0,1,1,1,1,1,1,0,0,
                0,1,1,1,1,1,1,1,1,0,
                1,1,1,1,1,1,1,1,1,1,
                0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0]

var g_motherShip =[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,
                   0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,
                   0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
                   0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,
                   1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                   0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,
                   0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,
                   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]


var g_alien = [0,0,0,0,0,0,0,0,0,
               0,0,0,0,0,0,0,0,0,
               0,0,0,1,0,1,0,0,0,
               0,0,1,1,1,1,1,0,0,
               0,1,1,1,1,1,1,1,0,
               1,1,0,0,1,0,0,1,1,
               1,1,1,1,1,1,1,1,1,
               1,1,1,1,1,1,1,1,1,
               1,0,1,0,1,0,1,0,1]

var g_alien1a =   [0,0,0,0,0,0,0,0,0,
                   0,0,0,0,0,0,0,0,0,
                   0,0,0,1,0,1,0,0,0,
                   0,0,1,1,1,1,1,0,0,
                   0,1,1,1,1,1,1,1,0,
                   1,1,0,0,1,0,0,1,1,
                   1,1,1,1,1,1,1,1,1,
                   1,1,1,1,1,1,1,1,1,
                   0,1,0,1,0,1,0,1,0]

var g_alien2 =  [0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,
                 0,0,0,1,1,1,0,0,0,
                 0,1,1,1,1,1,1,1,0,
                 1,1,0,1,1,1,0,1,1,
                 1,1,1,1,1,1,1,1,1,
                 0,0,1,1,0,1,1,0,0,
                 0,1,1,0,0,0,1,1,0,
                 1,1,0,0,0,0,0,1,1]

var g_alien2a = [0,0,0,0,0,0,0,0,0,
                 0,0,0,0,0,0,0,0,0,
                 0,0,0,1,1,1,0,0,0,
                 0,1,1,1,1,1,1,1,0,
                 1,1,0,1,1,1,0,1,1,
                 1,1,1,1,1,1,1,1,1,
                 0,0,1,1,0,1,1,0,0,
                 0,0,1,1,0,1,1,0,0,
                 0,0,1,1,0,1,1,0,0]

var g_bunkerBaseLeft =  [1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1]

var g_bunkerBaseLeft1 = [1,0,1,0,1,0,1,0,
                         0,1,0,1,0,1,0,1,
                         1,0,1,0,1,0,1,0,
                         0,1,0,1,0,1,0,1,
                         1,0,1,0,1,0,1,0,
                         0,1,0,1,0,1,0,1,
                         1,0,1,0,1,0,1,0,
                         0,1,0,1,0,1,0,1]

var g_bunkerBaseRight = [1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1]

var g_bunkerBaseRight1 =[1,0,1,0,1,0,1,0,
                         0,1,0,1,0,1,0,1,
                         1,0,1,0,1,0,1,0,
                         0,1,0,1,0,1,0,1,
                         1,0,1,0,1,0,1,0,
                         0,1,0,1,0,1,0,1,
                         1,0,1,0,1,0,1,0,
                         0,1,0,1,0,1,0,1]

var g_bunkerTopRight =  [1,0,0,0,0,0,0,0,
                         1,1,0,0,0,0,0,0,
                         1,1,1,0,0,0,0,0,
                         1,1,1,1,0,0,0,0,
                         1,1,1,1,1,0,0,0,
                         1,1,1,1,1,1,0,0,
                         1,1,1,1,1,1,1,0,
                         1,1,1,1,1,1,1,1]

var g_bunkerTopRight1 = [1,0,0,0,0,0,0,0,
                         0,1,0,0,0,0,0,0,
                         1,0,1,0,0,0,0,0,
                         0,1,0,1,0,0,0,0,
                         1,0,1,0,1,0,0,0,
                         0,1,0,1,0,1,0,0,
                         1,0,1,0,1,0,1,0,
                         0,1,0,1,0,1,0,1]

var g_bunkerTopLeft =   [0,0,0,0,0,0,0,1,
                         0,0,0,0,0,0,1,1,
                         0,0,0,0,0,1,1,1,
                         0,0,0,0,1,1,1,1,
                         0,0,0,1,1,1,1,1,
                         0,0,1,1,1,1,1,1,
                         0,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1]

var g_bunkerTopLeft1 =  [0,0,0,0,0,0,0,0,
                         0,0,0,0,0,0,0,1,
                         0,0,0,0,0,0,1,0,
                         0,0,0,0,0,1,0,1,
                         0,0,0,0,1,0,1,0,
                         0,0,0,1,0,1,0,1,
                         0,0,1,0,1,0,1,0,
                         0,1,0,1,0,1,0,1]

var g_bunkerTopCentre = [1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1,
                         1,1,1,1,1,1,1,1]

var g_bunkerTopCentre1 = [1,0,1,0,1,0,1,0,
                         0,1,0,1,0,1,0,1,
                         1,0,1,0,1,0,1,0,
                         0,1,0,1,0,1,0,1,
                         1,0,1,0,1,0,1,0,
                         0,1,0,1,0,1,0,1,
                         1,0,1,0,1,0,1,0,
                         0,1,0,1,0,1,0,1]

var g_MaxBullets = 20
var g_bullets = new Array(g_MaxBullets)
var g_fire = false
var g_FrameToLaunchNextBullet = 5;
var g_canvas = document.getElementById("myCanvas")
var g_context = g_canvas.getContext("2d")
var g_canvasWidth = g_canvas.width
var g_canvasHeight = g_canvas.height
var g_canvasBounds = g_canvas.getBoundingClientRect()
var g_FPS = 30
var g_timeInterval = 1000/g_FPS
var g_mainMenu = new c_mainMenu()
var g_gameScreen = new c_gamePlay()
var g_settingsScreen = new c_settingsScreen()
var g_numOfAliensPerRow = 8;
var g_bunkers = new Array(4)
var g_lastAliensColumn = g_numOfAliensPerRow-1;
var g_firstAliensColumn = 0;
var g_numOfAlienPerType = 16;
var g_motherShipObj = new c_grid(g_canvasWidth-100,50,4,g_motherShip)
var g_alienObjArray = new Array(g_numOfAlienPerType)
var g_alien2ObjArray = new Array(g_numOfAlienPerType)
var g_playerObj = new c_grid(g_canvasWidth/2-50,g_canvasHeight-70,10,g_player)
var g_aliensmoveLeft = false
var g_aliensMoveRight = true
var g_aliensMoveDown = false
var g_aliensmoveUp = false
var g_animationNum = 1;
var g_seconds = 0
var g_frameCounter = 0
var g_motherShipSpawn = 10  
var g_chooseTheAlienColumn = -1;
var g_targetTimeToLaunchEnemyBullet = 3;
var g_playerLives = 3;
var g_score = 0
var g_numOfAliensPresent = 32;
var g_gameOverFlag = false;
var g_gameWonFlag = false;

function c_mainMenu()
{
    this.startButton= new c_Button(300,300,200,30,"start")
    this.settingsButton = new c_Button(10,10,80,80,"settings")
    this.isPresentScreen = true
    
    this.m_draw = function m_draw(l_ctx)
    {
        l_ctx.fillStyle = "black"
        l_ctx.font = "30px Arial"
        if(this.isPresentScreen) l_ctx.fillText("Main Menu",330,100)
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
    this.homeButton = new c_Button(20,20,70,70,"home")
    this.m_draw = function m_draw(l_ctx)
    {
        l_ctx.font = '30px Arial'
        l_ctx.fillStyle = "black"
        if(this.isPresentScreen) l_ctx.fillText("Game play",300,300)
    }
}

function c_settingsScreen()
{
    this.isPresentScreen = false
    this.soundButton = new c_Button(300,300,200,30,"sound")
    this.homeButton = new c_Button(20,20,70,70,"home")
    this.m_draw = function m_draw(l_ctx)
    {
        l_ctx.fillStyle = "black"
        l_ctx.font = "30px Arial"
        if(this.isPresentScreen) l_ctx.fillText("Settings",330,100)
    }
}
function f_UIManager()
{
    var l_varCast;
    if(localStorage.getItem("sound") == "true") l_varCast = true
    if(localStorage.getItem("sound") == "false") l_varCast = false
    g_settingsScreen.soundButton.clicked = l_varCast
    if(g_mainMenu.startButton.clicked) g_gameScreen.isPresentScreen = true
    else g_gameScreen.isPresentScreen = false
    if(g_gameScreen.isPresentScreen) g_mainMenu.isPresentScreen = false
    else  g_mainMenu.isPresentScreen = true
    if(g_gameScreen.homeButton.clicked) 
    {
        g_gameScreen.isPresentScreen = false
        g_mainMenu.isPresentScreen = true
        g_mainMenu.startButton.clicked = false
        g_gameScreen.homeButton.clicked = false
    }
    if(g_mainMenu.settingsButton.clicked) g_settingsScreen.isPresentScreen = true
    else g_settingsScreen.isPresentScreen = false
    if(g_settingsScreen.isPresentScreen)
    {
        g_gameScreen.isPresentScreen =false
        g_mainMenu.isPresentScreen = false
        
        if(g_settingsScreen.homeButton.clicked)  
        {
            g_mainMenu.isPresentScreen = true
            g_settingsScreen.isPresentScreen = false
            g_mainMenu.settingsButton.clicked = false
            g_settingsScreen.homeButton.clicked = false
        }
    }
}

function f_screenObjHandler()
{
    if(g_mainMenu.isPresentScreen)
    {
        g_mainMenu.settingsButton.m_draw(g_context)
        g_mainMenu.startButton.m_draw(g_context)
    }
    if(g_gameScreen.isPresentScreen)
    {
        g_gameScreen.homeButton.m_draw(g_context)
    }
    if(g_settingsScreen.isPresentScreen) 
    {
        g_settingsScreen.soundButton.m_draw(g_context)
        g_settingsScreen.homeButton.m_draw(g_context)
    }
}

function f_clearCanvas()
{
    g_context.fillStyle = "black"
    g_context.fillRect(0,0,g_canvasWidth,g_canvasHeight)
}

function c_pixel(l_x,l_y,l_w,l_h,l_c)
{
    this.x = l_x
    this.y = l_y
    this.w = l_w
    this.h = l_h
    this.c = l_c

    this.m_draw = function m_draw(l_ctx)
    {
        if(this.c == 1) l_ctx.fillStyle = 'white'
        if(this.c == 0) l_ctx.fillStyle = "black"
        l_ctx.fillRect(this.x,this.y,this.w,this.h)
    }
}

function c_grid(l_x,l_y,l_size,l_bitArray,l_bitArray2)
{
    this.startX = l_x
    this.startY = l_y
    this.column = parseInt(Math.sqrt(l_bitArray.length))
    this.row = this.column
    this.gridArray = l_bitArray
    this.gridArray2 = l_bitArray2
    this.pxsize = l_size
    this.pixelObjArray = new Array(l_bitArray.length)
    this.pixelObjArray2 = new Array(l_bitArray.length)
    this.moveLeft = false
    this.moveRight = false
    this.moveSpeedX = 10
    this.moveSpeedY = 0
    this.width = this.pxsize*(this.row+1)
    this.height = this.pxsize*(this.column+1)
    this.isAlive = true
    this.level = 1;
    var l_count = 0;

    this.m_create = function m_create()
    {
        for(j=0;j<this.row;j++)
        {
            for(i=0;i<this.column;i++)
            {
                this.pixelObjArray[l_count] = new c_pixel(this.startX,this.startY,this.pxsize,this.pxsize,this.gridArray[l_count],this.c)
                if(this.gridArray2)this.pixelObjArray2[l_count] = new c_pixel(this.startX,this.startY,this.pxsize,this.pxsize,this.gridArray2[l_count],this.c)
                this.startX+=this.pxsize
                l_count++
            }
            this.startX = l_x
            this.startY+= this.pxsize
        }
    }
    this.m_draw = function m_draw(l_ctx,l_bitmapNum)
    {
        if((!l_bitmapNum)||l_bitmapNum == 1)
        {
            for(i=0;i<this.pixelObjArray.length;i++)
            {
                if(this.isAlive)this.pixelObjArray[i].m_draw(l_ctx)
            }
        }
        if(l_bitmapNum == 2||this.level == 2)
        {
            for(i=0;i<this.pixelObjArray2.length;i++)
            {
                if(this.isAlive)this.pixelObjArray2[i].m_draw(l_ctx)
            }
        }
    }
    this.m_move = function m_move()
    {
        this.startX  += this.moveSpeedX
        for(i=0;i<this.pixelObjArray.length;i++)
        {
            this.pixelObjArray[i].x += this.moveSpeedX
            if(this.gridArray2)this.pixelObjArray2[i].x += this.moveSpeedX
        }
        for(i=0;i<this.pixelObjArray.length;i++)
        {
            this.pixelObjArray[i].x += this.moveSpeedX
            if(this.gridArray2)this.pixelObjArray2[i].x += this.moveSpeedX
        }
        this.startY  += this.moveSpeedY
        for(i=0;i<this.pixelObjArray.length;i++)
        {
            this.pixelObjArray[i].y+= this.moveSpeedY
            if(this.gridArray2)this.pixelObjArray2[i].y+= this.moveSpeedY
        }
        for(i=0;i<this.pixelObjArray.length;i++)
        {
            this.pixelObjArray[i].y += this.moveSpeedY
            if(this.gridArray2)this.pixelObjArray2[i].y += this.moveSpeedY
        }
    }
}

function c_bullet(l_x,l_y,l_w,l_h,l_c,l_layer)
{
    this.x = l_x
    this.y = l_y
    this.w = l_w
    this.h = l_h
    this.c = l_c
    this.isAlive = false
    this.moveSpeed = 10
    this.layer = l_layer
    this.m_draw = function m_draw(l_ctx)
    {
        l_ctx.fillStyle = this.c
        if(this.isAlive) l_ctx.fillRect(this.x,this.y,this.w,this.h)
    }
    this.m_checkCollision = function m_checkCollision(l_canvasWidth,l_canvasHeight)
    {
        if(this.x<=0||this.y<=0 || this. x >= l_canvasWidth || this.y >= l_canvasHeight)
        {
            this.isAlive = false
        }
    }
    this.m_move = function m_move()
    {
        if( this.isAlive )
        {
            if(this.layer == "player") this.y -= this.moveSpeed
            if(this.layer == "enemy") this.y += this.moveSpeed
        }
    }
}
function f_initializeBullets()
{
    for(i=0;i<g_MaxBullets;i++)
    {
        g_bullets[i] = new c_bullet(0,0,5,10,"red","player")
    }
}
function f_drawBullets()
{
    for(k=0;k<g_MaxBullets;k++)
    {
        g_bullets[k].m_draw(g_context)
    }
}

function f_moveBulletsAndCheckCollisionWithBoundary()
{
    for(l=0;l<g_MaxBullets;l++)
    {
        g_bullets[l].m_checkCollision(g_canvasWidth,g_canvasHeight)
        g_bullets[l].m_move()
    }
}
function f_ActivatePlayerBullets()
{
    if(g_fire &&  (g_frameCounter > g_FrameToLaunchNextBullet))
    {
        for(j=0;j<g_MaxBullets;j++)
        {
            if(!g_bullets[j].isAlive)
            {
                g_bullets[j].layer = "player"
                g_bullets[j].isAlive = true
                g_bullets[j].x = g_playerObj.pixelObjArray[0].x+45
                g_bullets[j].y = g_playerObj.pixelObjArray[0].y
                g_FrameToLaunchNextBullet = g_frameCounter + 5;
                return
            }
        }
    }
}

function c_bunker(l_x,l_y,l_bottomLeft,l_bottomRight,l_topLeft,l_topcenter,l_topRight,l_bottomLeft1,l_bottomRight1,l_topLeft1,l_topcenter1,l_topRight1,l_pxSize,l_grid)
{
    this.x = l_x
    this.y = l_y
    this.bmpBottomleft = l_bottomLeft
    this.bmpBottomRight = l_bottomRight
    this.bmptopLeft = l_topLeft
    this.bmptopRight = l_topRight
    this.bmptopcenter = l_topcenter
    this.bmpBottomleft1 = l_bottomLeft1
    this.bmpBottomRight1 = l_bottomRight1
    this.bmptopLeft1 = l_topLeft1
    this.bmptopRight1 = l_topRight1
    this.bmptopcenter1 = l_topcenter1
    this.bottomLeftObj
    this.bottomRightObj
    this.topLeftObj
    this.topRightObj
    this.topcenterObj

    this.m_initialize = function m_initialize()
    {
        this.bottomLeftObj = new l_grid(l_x,l_y,l_pxSize,this.bmpBottomleft,this.bmpBottomleft1)
        this.bottomRightObj = new l_grid(l_x+80,l_y,l_pxSize,this.bmpBottomRight,this.bmpBottomRight1)
        this.topLeftObj = new l_grid(l_x,l_y-40,l_pxSize,this.bmptopLeft,this.bmptopLeft1)
        this.topRightObj = new l_grid(l_x+80,l_y-40,l_pxSize,this.bmptopRight,this.bmptopRight1)
        this.topcenterObj = new l_grid(l_x+40,l_y-40,l_pxSize,this.bmptopcenter,this.bmptopcenter1)
    }
    this.m_create = function m_create()
    {
        this.bottomLeftObj.m_create()
        this.bottomRightObj.m_create()
        this.topLeftObj.m_create()
        this.topRightObj.m_create()
        this.topcenterObj.m_create()   
    }
    this.m_draw = function m_draw(l_ctx)
    {
        this.bottomLeftObj.m_draw(l_ctx)
        this.bottomRightObj.m_draw(l_ctx)
        this.topLeftObj.m_draw(l_ctx)
        this.topRightObj.m_draw(l_ctx)
        this.topcenterObj.m_draw(l_ctx)
    }
}

function f_createAndInitializeBunkers()
{
    var l_x = 30
    for(b=0;b<g_bunkers.length;b++)
    {
        g_bunkers[b] = new c_bunker(l_x,400,g_bunkerBaseLeft,g_bunkerBaseRight,g_bunkerTopLeft,g_bunkerTopCentre,g_bunkerTopRight,g_bunkerBaseLeft1,g_bunkerBaseRight1,g_bunkerTopLeft1,g_bunkerTopCentre1,g_bunkerTopRight1,5,c_grid)
        g_bunkers[b].m_initialize()
        g_bunkers[b].m_create()
        l_x += 180
    }
}
function f_drawBunkers()
{
    for(b=0;b<g_bunkers.length;b++)
    {
        g_bunkers[b].m_draw(g_context)
    }
}
function f_checkCollisionofSpaceship()
{
    if(g_playerObj.moveLeft)
    {
        if(g_playerObj.pixelObjArray[0].x<=0)g_playerObj.moveSpeedX = 0
        else g_playerObj.moveLeft = -10
    }
    if(g_playerObj.moveRight)
    {
        if(g_playerObj.pixelObjArray[0].x+g_playerObj.width>g_canvasWidth) g_playerObj.moveSpeedX = 0
        else g_playerObj.moveSpeedX = 10
    }
}
function f_movementHandlerofSpaceship()
{
    g_playerObj.moveSpeedX = 0;
    if(g_playerObj.moveLeft) g_playerObj.moveSpeedX = -10
    if(g_playerObj.moveRight) g_playerObj.moveSpeedX = 10
}
function f_mothershipcollsiondetection()
{
    if(g_motherShipObj.startX<=0)
    {
        g_motherShipObj.moveSpeedX = 10
    }
    if(g_motherShipObj.startX>=g_canvasWidth-g_motherShipObj.width)
    {
        g_motherShipObj.moveSpeedX = -10
    }
}

function f_alienMovement()
{
    for(m=0;m<g_numOfAlienPerType;m++)
    {
        if(g_frameCounter%60 == 0)
        {
            g_alienObjArray[m].m_move()
            g_alien2ObjArray[m].m_move()
            
            if(g_aliensMoveDown==true) 
            {
                g_aliensMoveDown = false
            }
        }
        if(g_aliensMoveRight)
        {    
            g_alienObjArray[m].moveSpeedX = 10
            g_alien2ObjArray[m].moveSpeedX = 10
        }
        else if(g_aliensmoveLeft)
        {
            g_alienObjArray[m].moveSpeedX = -10
            g_alien2ObjArray[m].moveSpeedX = -10
        }
        if(g_aliensMoveDown)
        {
            g_alienObjArray[m].moveSpeedY = 10
            g_alien2ObjArray[m].moveSpeedY = 10
        }
        else
        {
            g_alienObjArray[m].moveSpeedY = 0
            g_alien2ObjArray[m].moveSpeedY = 0
        }
        
        if(g_alienObjArray[g_lastAliensColumn].pixelObjArray[0].x >= (g_canvasWidth-50))
        {
            g_aliensMoveRight = false
            g_aliensmoveLeft = true
            g_aliensMoveDown = true
        }

        if(g_alienObjArray[g_firstAliensColumn].pixelObjArray[0].x <= 10 )
        {
            g_aliensmoveLeft = false
            g_aliensMoveRight = true
            g_aliensMoveDown = true
        }
    }   
}
function f_checkAlienToBulletCollison()
{
    for(t=0;t<g_numOfAlienPerType;t++)
    {
        for(s=0;s<g_MaxBullets;s++)
        {
            if(g_bullets[s].x>=g_alienObjArray[t].pixelObjArray[0].x&&g_bullets[s].y>=g_alienObjArray[t].pixelObjArray[0].y&&g_bullets[s].x<=g_alienObjArray[t].pixelObjArray[0].x+g_alienObjArray[t].width&&g_bullets[s].y<=g_alienObjArray[t].pixelObjArray[0].y+g_alienObjArray[t].height)
            {
                if(g_alienObjArray[t].isAlive && g_bullets[s].isAlive && g_bullets[s].layer == "player")
                {      
                    g_alienObjArray[t].isAlive = false
                    g_bullets[s].isAlive = false
                    g_score += 10
                    g_numOfAliensPresent--
                }
            }
            if(g_bullets[s].x>=g_alien2ObjArray[t].pixelObjArray[0].x&&g_bullets[s].y>=g_alien2ObjArray[t].pixelObjArray[0].y&&g_bullets[s].x<=g_alien2ObjArray[t].pixelObjArray[0].x+g_alien2ObjArray[t].width&&g_bullets[s].y<=g_alien2ObjArray[t].pixelObjArray[0].y+g_alien2ObjArray[t].height)
            {
                if(g_alien2ObjArray[t].isAlive && g_bullets[s].isAlive && g_bullets[s].layer == "player")
                {      
                    g_alien2ObjArray[t].isAlive = false
                    g_bullets[s].isAlive = false
                    g_score += 10
                    g_numOfAliensPresent--
                }
            }
        }
    }
}
function f_checkAlienEndColumn()
{
    for( a = 0 ; a < 2 ; a++ )
    {
        if(g_alienObjArray[ (g_lastAliensColumn)+(a*g_numOfAliensPerRow)].isAlive) 
        {
           return
        }
        if(g_alien2ObjArray[(g_lastAliensColumn)+(a*g_numOfAliensPerRow)].isAlive) 
        {
            return
        }
    }
    if(g_firstAliensColumn != g_lastAliensColumn)g_lastAliensColumn--;    
}
function f_checkAlienStartColumn()
{
    for( a = 0 ; a < 2 ; a++ )
    {
        if(g_alienObjArray[ (g_firstAliensColumn)+(a*g_numOfAliensPerRow)].isAlive) 
        {
           return
        }
        if(g_alien2ObjArray[(g_firstAliensColumn)+(a*g_numOfAliensPerRow)].isAlive) 
        {
            return
        }
    }
    if(g_firstAliensColumn != g_lastAliensColumn)g_firstAliensColumn++;
}
function f_checkMotherShipCollisonToBullet()
{
    for(z =0;z<g_MaxBullets;z++)
    {
        if(g_bullets[z].x>=g_motherShipObj.pixelObjArray[0].x&&g_bullets[z].y>=g_motherShipObj.pixelObjArray[0].y&&g_bullets[z].x<=g_motherShipObj.pixelObjArray[0].x+g_motherShipObj.width&&g_bullets[z].y<=g_motherShipObj.pixelObjArray[0].y+g_motherShipObj.height)
        {
            if(g_motherShipObj.isAlive && g_bullets[z].isAlive && g_bullets[z].layer == "player")
            {
                g_bullets[z].isAlive = false
                g_motherShipObj.isAlive = false
                g_score += 100;
            }
        }
    }
}

function f_createAlienObjArray()
{
    var l_x=20;
    for(k=0;k<g_numOfAliensPerRow;k++)
    {
        g_alienObjArray[k] = new c_grid(l_x,100,4,g_alien,g_alien1a)
        g_alien2ObjArray[k] = new c_grid(l_x,140,4,g_alien2,g_alien2a)
        g_alien2ObjArray[k+g_numOfAliensPerRow] = new c_grid(l_x,180,4,g_alien2,g_alien2a)
        g_alienObjArray[k+g_numOfAliensPerRow] = new c_grid(l_x,220,4,g_alien,g_alien1a)
        g_alienObjArray[k].m_create()
        g_alienObjArray[k+g_numOfAliensPerRow].m_create()
        g_alien2ObjArray[k].m_create()
        g_alien2ObjArray[k+g_numOfAliensPerRow].m_create()
        l_x+=70
    }
}
function f_drawObjects()
{
    for(k=0;k<g_numOfAlienPerType;k++)
    {
        g_alienObjArray[k]. m_draw(g_context,g_animationNum)
        g_alien2ObjArray[k].m_draw(g_context,g_animationNum)
    }
}

function f_checkBunkerCollision()
{
    for(u=0;u<g_bunkers.length;u++)
    {
        for(v=0;v<g_MaxBullets;v++)
        {
            if(g_bullets[v].x>=g_bunkers[u].bottomLeftObj.pixelObjArray[0].x&&g_bullets[v].y>=g_bunkers[u].bottomLeftObj.pixelObjArray[0].y&&g_bullets[v].x<=g_bunkers[u].bottomLeftObj.pixelObjArray[0].x+g_bunkers[u].bottomLeftObj.width&&g_bullets[v].y<=g_bunkers[u].bottomLeftObj.pixelObjArray[0].y+g_bunkers[u].bottomLeftObj.height)
            {
                if( g_bunkers[u].bottomLeftObj.isAlive&& g_bullets[v].isAlive)
                {
                    if( g_bunkers[u].bottomLeftObj.level == 2 )
                    {
                        g_bunkers[u].bottomLeftObj.isAlive = false
                        g_bullets[v].isAlive = false
                        return
                    }
                    {                              
                        g_bunkers[u].bottomLeftObj.level = 2;
                        g_bullets[v].isAlive = false  
                    }
                }
            }
            if(g_bullets[v].x>=g_bunkers[u].bottomRightObj.pixelObjArray[0].x&&g_bullets[v].y>=g_bunkers[u].bottomRightObj.pixelObjArray[0].y&&g_bullets[v].x<=g_bunkers[u].bottomRightObj.pixelObjArray[0].x+g_bunkers[u].bottomRightObj.width&&g_bullets[v].y<=g_bunkers[u].bottomRightObj.pixelObjArray[0].y+g_bunkers[u].bottomRightObj.height)
            {
                if( g_bunkers[u].bottomRightObj.isAlive&& g_bullets[v].isAlive)
                {
                    if( g_bunkers[u].bottomRightObj.level == 2 )
                    {
                        g_bunkers[u].bottomRightObj.isAlive = false
                        g_bullets[v].isAlive = false
                        return
                    } 
                    {
                        g_bunkers[u].bottomRightObj.level = 2;
                        g_bullets[v].isAlive = false
                    }                   
                }
            }
            if(g_bullets[v].x>=g_bunkers[u].topLeftObj.pixelObjArray[0].x&&g_bullets[v].y>=g_bunkers[u].topLeftObj.pixelObjArray[0].y&&g_bullets[v].x<=g_bunkers[u].topLeftObj.pixelObjArray[0].x+g_bunkers[u].topLeftObj.width&&g_bullets[v].y<=g_bunkers[u].topLeftObj.pixelObjArray[0].y+g_bunkers[u].topLeftObj.height)
            {
                if( g_bunkers[u].topLeftObj.isAlive&& g_bullets[v].isAlive)
                {
                    if( g_bunkers[u].topLeftObj.level == 2 )
                    {
                        g_bunkers[u].topLeftObj.isAlive = false
                        g_bullets[v].isAlive = false
                        return
                    }  
                    
                    {
                        g_bunkers[u].topLeftObj.level = 2;
                        g_bullets[v].isAlive = false 
                
                    }
                }
            }
            if(g_bullets[v].x>=g_bunkers[u].topRightObj.pixelObjArray[0].x&&g_bullets[v].y>=g_bunkers[u].topRightObj.pixelObjArray[0].y&&g_bullets[v].x<=g_bunkers[u].topRightObj.pixelObjArray[0].x+g_bunkers[u].topRightObj.width&&g_bullets[v].y<=g_bunkers[u].topRightObj.pixelObjArray[0].y+g_bunkers[u].topRightObj.height)
            {
                if( g_bunkers[u].topRightObj.isAlive && g_bullets[v].isAlive)
                {
                    if(  g_bunkers[u].topRightObj.level == 2 )
                    {
                        g_bunkers[u].topRightObj.isAlive = false
                        g_bullets[v].isAlive = false
                        return
                    }   
                    
                    {
                        g_bunkers[u].topRightObj.level = 2;
                        g_bullets[v].isAlive = false
                    }
                }
            }
            if(g_bullets[v].x>=g_bunkers[u].topcenterObj.pixelObjArray[0].x&&g_bullets[v].y>=g_bunkers[u].topcenterObj.pixelObjArray[0].y&&g_bullets[v].x<=g_bunkers[u].topcenterObj.pixelObjArray[0].x+g_bunkers[u].topcenterObj.width&&g_bullets[v].y<=g_bunkers[u].topcenterObj.pixelObjArray[0].y+g_bunkers[u].topcenterObj.height)
            {
                if( g_bunkers[u].topcenterObj.isAlive && g_bullets[v].isAlive)
                {
                   if( g_bunkers[u].topcenterObj.level == 2 )
                    {
                        g_bunkers[u].topcenterObj.isAlive = false
                        g_bullets[v].isAlive = false
                        return
                    }    
                    
                        g_bunkers[u].topcenterObj.level = 2;
                        g_bullets[v].isAlive = false
                }
            }
        }
    }
}
function f_animate()
{
    if(g_seconds %2 == 0)
    {
        if(g_animationNum == 1)
        {
            g_animationNum = 2;
            return;
        }
        if(g_animationNum == 2)
        {
            g_animationNum =1;
            return
        }
    }
}
function f_checkGameOver()
{
    if(g_numOfAliensPresent <=0)
    {
        g_gameOverFlag = true
        g_gameWonFlag = true
    }
    for( d = 0; d<g_numOfAlienPerType; d++)
    {
        if(((g_alien2ObjArray[d].isAlive && g_alien2ObjArray[d].pixelObjArray[0].y>= 350) ||(g_alienObjArray[d].isAlive && g_alienObjArray[d].pixelObjArray[0].y>=330)) || g_playerObj.isAlive == false)
        {
            g_gameOverFlag = true;
        }
    }
}
function f_PrintGameOver()
{
    if(g_gameOverFlag)
    {
        f_clearCanvas()
        g_context.font = '30px Arial'
        g_context.fillStyle = "white"
        if(g_gameWonFlag)
        {
            g_context.fillText("You Win", g_canvasWidth/2-50,g_canvasHeight/2)
        }
        else
        {
            g_context.fillText("You lose", g_canvasWidth/2-50,g_canvasHeight/2)
        }
        g_context.fillText("Your Score : "+g_score,g_canvasWidth/2-50,g_canvasHeight/2 +50 )
    }    
}
function f_printLives()
{
    g_context.font = '16px Arial'
    g_context.fillStyle = " white"
    g_context.fillText("LIVES : " +g_playerLives,20,20)
}
function f_printScore()
{
    let l_score = 0;
    if(g_score<=0) l_score = 0;
    else l_score = g_score;
    g_context.font = '16px Arial'
    g_context.fillStyle = " white"
    g_context.fillText("Score : " +l_score,g_canvasWidth-110,20)
}
function f_checkCollisionBetweenBulletAndPlayer()
{
    for(c = 0; c < g_MaxBullets ; c++) 
    {
        if(g_bullets[c].isAlive && g_bullets[c].layer == "enemy")
        {
            if( g_bullets[c].x >= g_playerObj.pixelObjArray[0].x && g_bullets[c].x <= g_playerObj.pixelObjArray[0].x + g_playerObj.width)
            {
                if( g_bullets[c].y >= g_playerObj.pixelObjArray[0].y && g_bullets[c].y <= g_playerObj.pixelObjArray[0].y + g_playerObj.height)
                {
                    g_playerLives--
                    g_bullets[c].isAlive = false
                    if(g_playerLives<=0)
                    {
                        g_playerObj.isAlive = false
                    }
                }
            }
        }
    }
}
function f_ActivateEnemyBullets()
{
    if(g_seconds == g_targetTimeToLaunchEnemyBullet)
    {
       f_selectTheAlien()
    }
}
function f_selectTheAlien()
{
    g_chooseTheAlienColumn = (Math.round((Math.random()*(g_lastAliensColumn-g_firstAliensColumn))+g_firstAliensColumn))
    g_targetTimeToLaunchEnemyBullet += 3;
        
    if(g_alienObjArray[ g_chooseTheAlienColumn + g_numOfAliensPerRow ].isAlive)
    {
        for(b =0; b<g_MaxBullets;b++)
        {
            g_bullets[b].layer = "enemy"
            g_bullets[b].isAlive = true
            g_bullets[b].x = g_alienObjArray[g_chooseTheAlienColumn + g_numOfAliensPerRow].pixelObjArray[0].x + (g_alienObjArray[g_chooseTheAlienColumn + g_numOfAliensPerRow].width/2)
            g_bullets[b].y = g_alienObjArray[g_chooseTheAlienColumn + g_numOfAliensPerRow].pixelObjArray[0].y + g_alienObjArray[g_chooseTheAlienColumn + g_numOfAliensPerRow].height
            return
        }
    }
    if(g_alien2ObjArray[ g_chooseTheAlienColumn + g_numOfAliensPerRow ].isAlive)
    {
        for(b =0; b<g_MaxBullets;b++)
        {
            g_bullets[b].layer = "enemy"
            g_bullets[b].isAlive = true
            g_bullets[b].x = g_alien2ObjArray[g_chooseTheAlienColumn + g_numOfAliensPerRow].pixelObjArray[0].x + (g_alien2ObjArray[g_chooseTheAlienColumn + g_numOfAliensPerRow].width/2)
            g_bullets[b].y = g_alien2ObjArray[g_chooseTheAlienColumn + g_numOfAliensPerRow].pixelObjArray[0].y + g_alien2ObjArray[g_chooseTheAlienColumn + g_numOfAliensPerRow].height                
            return
        }
    }
    if(g_alien2ObjArray[ g_chooseTheAlienColumn ].isAlive)
    {
        for(b =0; b<g_MaxBullets;b++)
        {
            g_bullets[b].layer = "enemy"
            g_bullets[b].isAlive = true
            g_bullets[b].x = g_alien2ObjArray[g_chooseTheAlienColumn ].pixelObjArray[0].x + (g_alien2ObjArray[g_chooseTheAlienColumn ].width/2)
            g_bullets[b].y = g_alien2ObjArray[g_chooseTheAlienColumn ].pixelObjArray[0].y + g_alien2ObjArray[g_chooseTheAlienColumn ].height                
            return
        }
    }
    if(g_alienObjArray[ g_chooseTheAlienColumn].isAlive)
    {
        for(b =0; b<g_MaxBullets;b++)
        {
            g_bullets[b].layer = "enemy"
            g_bullets[b].isAlive = true
            g_bullets[b].x = g_alienObjArray[g_chooseTheAlienColumn ].pixelObjArray[0].x +  (g_alienObjArray[g_chooseTheAlienColumn ].width/2)
            g_bullets[b].y = g_alienObjArray[g_chooseTheAlienColumn ].pixelObjArray[0].y +  g_alienObjArray[g_chooseTheAlienColumn ].height               
            return
        }
    }
    f_selectTheAlien()
}
function f_timeCalculator()
{
    g_frameCounter++
    if(g_frameCounter%g_FPS == 0)
    {
        g_seconds++ 
        f_animate();
    }
}

function f_gameLoop()
{
    f_UIManager()
    f_clearCanvas()
    f_screenObjHandler()
    g_mainMenu.m_draw(g_context)
    g_gameScreen.m_draw(g_context)
    g_settingsScreen.m_draw(g_context)
    if(g_gameScreen.isPresentScreen)
    {
        f_timeCalculator()
        f_moveBulletsAndCheckCollisionWithBoundary()
        f_ActivatePlayerBullets()
        f_ActivateEnemyBullets()
        f_movementHandlerofSpaceship()
        g_motherShipObj.m_move()
        f_checkCollisionBetweenBulletAndPlayer()
        f_checkCollisionofSpaceship()
        f_checkAlienToBulletCollison()
        f_checkAlienStartColumn()
        f_checkAlienEndColumn()
        f_checkMotherShipCollisonToBullet()
        f_alienMovement()
        f_mothershipcollsiondetection()
        f_checkBunkerCollision()
        g_playerObj.m_move()
        f_clearCanvas()
        f_printLives()
        f_printScore()
        g_motherShipObj.m_draw(g_context)
        f_drawObjects()
        g_playerObj.m_draw(g_context)
        f_drawBunkers()
        f_drawBullets()
        f_checkGameOver()
        f_PrintGameOver();
    }
}

f_initializeBullets()
g_playerObj.m_create()
f_createAlienObjArray()
g_motherShipObj.m_create()
f_createAndInitializeBunkers()
setInterval(f_gameLoop,g_timeInterval)

document.addEventListener('keydown',f_keydownEventHandler)
document.addEventListener('keyup',f_keyupEventHandler)
document.addEventListener("mousedown",f_mouseDownEventHandler)

function f_keydownEventHandler(l_event)
{
    switch(l_event.keyCode)
    {
        case 32:
            l_event.preventDefault()
            g_fire = true
            break
        case 37: 
            l_event.preventDefault()
            g_playerObj.moveLeft = true
            break;
        case 38 : 
            l_event.preventDefault()
            break;
        case 39 :
            l_event.preventDefault()
            g_playerObj.moveRight = true
            break;
        case 40 :
            l_event.preventDefault()
            break;
    }
}
function f_keyupEventHandler(l_event)
{
    switch(l_event.keyCode)
    {
        case 32:
            l_event.preventDefault()
            g_fire = false
            break;
        case 37: 
            l_event.preventDefault()
            g_playerObj.moveLeft = false
            break;
        case 38 : 
            l_event.preventDefault()
            break;
        case 39 :
            l_event.preventDefault()
            g_playerObj.moveRight = false
            break;
        case 40 :
            l_event.preventDefault()
            break;
    }
}
function f_mouseDownEventHandler(l_event)
{
    var l_mouseX = l_event.clientX - g_canvasBounds.left 
    var l_mouseY = l_event.clientY - g_canvasBounds.top 

    if(g_mainMenu.isPresentScreen)
    {
        if(l_mouseX >= g_mainMenu.startButton.x && l_mouseY > g_mainMenu.startButton.y && l_mouseX < g_mainMenu.startButton.x + g_mainMenu.startButton.w && l_mouseY < g_mainMenu.startButton.y + g_mainMenu.startButton.h )
        {    
            g_mainMenu.startButton.clicked = !g_mainMenu.startButton.clicked        
        }

        if(l_mouseX >= g_mainMenu.settingsButton.x && l_mouseY > g_mainMenu.settingsButton.y && l_mouseX < g_mainMenu.settingsButton.x + g_mainMenu.settingsButton.w && l_mouseY < g_mainMenu.settingsButton.y + g_mainMenu.settingsButton.h )
        {
            g_mainMenu.settingsButton.clicked = !g_mainMenu.settingsButton.clicked 
        }
    }  
    if(g_gameScreen.isPresentScreen)
    {
        if(l_mouseX >= g_gameScreen.homeButton.x && l_mouseY > g_gameScreen.homeButton.y && l_mouseX < g_gameScreen.homeButton.x + g_gameScreen.homeButton.w && l_mouseY < g_gameScreen.homeButton.y + g_gameScreen.homeButton.h )
        {
            g_gameScreen.homeButton.clicked = !g_gameScreen.homeButton.clicked
        }
    }
    if(g_settingsScreen.isPresentScreen)
    {
        if(l_mouseX >= g_settingsScreen.homeButton.x && l_mouseY > g_settingsScreen.homeButton.y && l_mouseX < g_settingsScreen.homeButton.x + g_settingsScreen.homeButton.w && l_mouseY < g_settingsScreen.homeButton.y + g_settingsScreen.homeButton.h)
        {                 
            g_settingsScreen.homeButton.clicked = !g_settingsScreen.homeButton.clicked
        }

        if(l_mouseX >= g_settingsScreen.soundButton.x && l_mouseY > g_settingsScreen.soundButton.y && l_mouseX < g_settingsScreen.soundButton.x + g_settingsScreen.soundButton.w && l_mouseY < g_settingsScreen.soundButton.y + g_settingsScreen.soundButton.h )
        {
            g_settingsScreen.soundButton.clicked = !g_settingsScreen.soundButton.clicked
            window.localStorage.setItem("sound",g_settingsScreen.soundButton.clicked)
        }
    }
}
