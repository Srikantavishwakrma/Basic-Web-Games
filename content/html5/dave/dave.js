const g_canvas = document.getElementById("myCanvas");
const g_context = g_canvas.getContext("2d");
const g_FPS = 30;
const g_timeInterval = 1000/g_FPS;
const g_canvasWidth = g_canvas.width;
const g_canvasHeight = g_canvas.height;
var g_rows = 13;
var g_columns = 50;
var g_numberImages = new Array(10);
var g_cupImgs = new Array(5);
var g_daveImgs = new Array(7);
var g_fireImgs = new Array(4);
var g_waterImgs = new Array(4);
var g_weedImgs = new Array(4);
var g_doorImg = new Image();
var g_diamonds = new Image();
var g_redDiamond = new Image();
var g_explosion1 = new Image();
var g_explosion2 = new Image();
var g_gunImg = new Image();
var g_gunTextImg = new Image();
var g_levelAndDavesImg = new Image();
var g_livesImg = new Image();
var g_monsterImg = new Image();
var g_monsterBulletImg = new Image();
var g_purTileImg = new Image();
var g_redTileImg = new Image();
var g_scoreText = new Image();
var g_sphereImg = new Image();
var g_imageArray = new Array();
var g_blockObjs = new Array(g_rows*g_columns);
var g_blockHeight = g_canvasHeight/g_rows;
var g_blockWidth = g_blockHeight;
var g_levelMoveSpeed = 0;
var g_moveLevelLeft = false;
var g_moveLevelRight = false;
var g_daveObj;
var g_activateLevelMovement = true;
var g_activateDaveMovement = true;
var g_leftKeyPressed = false;
var g_rightKeyPressed = false;
var g_upKeyPressed = false;
var g_lastLevelTrasitionReached = false;
var g_firstLevelTransitionReached = false;
const g_LevelBoundary1 = g_canvasWidth/4;
const g_levelBoundary2 = g_canvasWidth*3/4;
var g_daveAnimation = 0;
var g_daveHeight = g_blockHeight - 10;
var g_daveWidth = g_blockWidth - 15;
var g_speed = 5 ;
var g_daveAnimationState = false;
var g_frame = 0;
var g_monsterObj;
var g_Davebullet;
var g_monsterBullet;
var g_gameOver = false;
//red tile = 1
//red diamond = 3
//diamond = 2
//sphere = 4
//door = 5
//purtile =6 
//weed = 7 
//fire=8 
//water=9 
//cup = 10
//gun = 11
var g_bitmap = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,3,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,1,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,6,0,0,0,6,6,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,7,7,7,0,0,7,7,0,7,7,0,0,
                1,0,0,0,0,0,0,0,6,6,6,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,7,0,7,0,7,0,0,0,7,0,7,0,
                1,0,6,6,0,0,0,0,0,1,0,0,0,10,1,0,6,6,6,6,6,0,1,0,0,1,1,0,4,1,0,0,0,0,1,0,0,1,7,7,7,0,7,0,0,0,7,7,0,0,
                1,0,0,0,0,0,0,0,0,1,0,6,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,7,0,0,0,7,0,0,0,7,0,7,0,
                1,0,0,0,6,6,6,0,3,1,0,0,0,0,1,0,2,2,2,2,2,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,7,0,0,0,0,7,7,0,7,0,7,0,
                1,0,0,0,0,0,0,0,0,1,2,0,0,6,1,0,0,0,0,0,0,0,1,0,0,0,1,4,0,0,0,0,1,0,0,1,4,1,0,0,0,0,0,0,0,0,0,0,0,0,
                1,1,1,8,8,8,8,8,8,1,8,8,8,8,1,9,9,9,9,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,8,8,8,8,8,8,8];

function f_clearCanvas() 
{
    g_context.fillStyle = "black";
    g_context.fillRect(0, 0, g_canvasWidth, g_canvasHeight);
    g_context.strokeRect(0,0,g_canvasWidth,g_canvasHeight);
}
function c_block(l_x,l_y,l_w,l_h,l_type,l_img,l_speed)
{
    this.x = l_x;
    this.y = l_y;
    this.w = l_w;
    this.h = l_h;
    this.img = l_img;
    this.type = l_type;
    this.moveSpeed = l_speed;
    this.gravity = 1;
    this.isAlive = true;

    this.m_draw = function m_draw(l_ctx)
        {
            if(this.type && this.isAlive) l_ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
        }
}
function f_createBlocks()
{
    var l_x =0;
    var l_y =g_blockHeight;
    var l_type=0;
    var l_img;
    var l_columns = 0;
    var l_index = 0;

    for(j=0;j<g_rows*g_columns-1;j++)
    {
        l_columns++;
        l_type = g_bitmap[j];

        if(l_type == 1)
        {
            l_img = g_redTileImg;
        }
        else if(l_type == 2)
        {
            l_img = g_diamonds;
        }
        else if(l_type == 3)
        {
            l_img = g_redDiamond;
        }
        else if(l_type == 4)
        {
            l_img = g_sphereImg;
        }
        else if(l_type == 5)
        {
            l_img = g_doorImg;
        }
        else if(l_type == 6)
        {
            l_img = g_purTileImg;
        }
        else if(l_type == 7)
        {
            l_img = g_weedImgs[0];
        }
        else if(l_type == 8)
        {
            l_img = g_fireImgs[0];
        }
        else if(l_type == 9)
        {
            l_img = g_waterImgs[0];
        }
        else if(l_type == 10)
        {
            l_img = g_cupImgs[0];
        }
        else if(l_type == 11)
        {
            l_img = g_gunImg;
        }
        
        g_blockObjs[l_index] = new c_block(l_x,l_y,g_blockWidth,g_blockHeight,l_type,l_img,g_speed);
        l_x+= g_blockWidth;

        if(l_type != 0)
        {
            l_index++;
        }
        if(l_columns == g_columns)
        {
            l_columns = 0;
            l_y += g_blockHeight;
            l_x = 0;
        }
    }
}
function f_animateBlocks()
{
    if(g_animate)
    {
        for(m=0;m <g_blockObjs.length ;m++)
        {
            if(g_blockObjs[m] && g_blockObjs[m].isAlive)
            {
                if(g_blockObjs[m].type == 10)
                {
                    g_blockObjs[m].img = g_cupImgs[parseInt(Math.random()*(g_cupImgs.length-1))]
                }
            }
            if(g_blockObjs[m] && g_blockObjs[m].isAlive)
            {
                if(g_blockObjs[m].type == 9)
                {
                    g_blockObjs[m].img = g_waterImgs[parseInt(Math.random()*(g_waterImgs.length))]
                }
            }
            if(g_blockObjs[m] && g_blockObjs[m].isAlive)
            {
                if(g_blockObjs[m].type == 8)
                {
                    g_blockObjs[m].img = g_fireImgs[parseInt(Math.random()*(g_fireImgs.length))]
                }
            }
            if(g_blockObjs[m] && g_blockObjs[m].isAlive)
            {
                if(g_blockObjs[m].type == 7)
                {
                    g_blockObjs[m].img = g_weedImgs[parseInt(Math.random()*(g_weedImgs.length))]
                }
            }
        }
    }
}
function f_drawImgs()
{
    for(k=0;k<g_blockObjs.length;k++)
    {
        if(g_blockObjs[k]) g_blockObjs[k].m_draw(g_context);
    }
}
function f_moveLevel()
{
    if(g_activateLevelMovement)
    {
        if(g_moveLevelLeft) g_levelMoveSpeed = -g_speed
        if(g_moveLevelRight) g_levelMoveSpeed = g_speed

        for(k=0;k<g_blockObjs.length;k++)
        {
            if(g_blockObjs[k]) g_blockObjs[k].x+= g_levelMoveSpeed
        }

        g_moveLevelLeft = false
        g_moveLevelRight = false
        g_levelMoveSpeed = 0
    }
}
function f_moveDave()
{
    if(g_daveObj.movingDown)
    {
        f_checkCollisionBetweenDaveAndBlocks("d")
    }
    if(g_daveObj.inAir)
    {
        g_upKeyPressed = false
        f_checkCollisionBetweenDaveAndBlocks("u")
    }
    if(g_upKeyPressed)
    {
        g_daveObj.velocity = -15
        g_daveObj.movingUp = true
        g_daveObj.inAir = true
        f_checkCollisionBetweenDaveAndBlocks("u")
        f_checkCollisionBetweenDaveAndBlocks("d")
    }
    if(g_rightKeyPressed)
    {
        g_daveObj.x += g_speed
        f_checkCollisionBetweenDaveAndBlocks("r")
        g_daveObj.direction = "r"
    }
    if(g_leftKeyPressed)
    {
        g_daveObj.x -= g_speed
        f_checkCollisionBetweenDaveAndBlocks("l")
        g_daveObj.direction = "l"
    }
}
function f_levelMovementFlagsHandler()
{
    g_activateLevelMovement = false

    if(g_blockObjs[0].x >= 0)
    {
        g_firstLevelTransitionReached = true
    }
    else
    {
        g_firstLevelTransitionReached = false
    }

    if(g_blockObjs[g_columns-1].x<= g_canvasWidth)
    {
        g_lastLevelTrasitionReached = true
    }
    else
    {
        g_lastLevelTrasitionReached = false
    }

    if(!g_firstLevelTransitionReached && g_daveObj.x <= g_LevelBoundary1)
    {
        g_daveObj.x = g_LevelBoundary1
        g_activateLevelMovement = true
    }
    if(!g_lastLevelTrasitionReached && g_daveObj.x>= g_levelBoundary2- g_daveObj.w)
    {
        g_daveObj.x = g_levelBoundary2 - g_daveObj.w
        g_activateLevelMovement = true
    }
    if(g_activateLevelMovement)
    {
        if(g_rightKeyPressed)
        {
            g_moveLevelLeft = true
        }
        if(g_leftKeyPressed)
        {
            g_moveLevelRight = true
        }
    } 
    if(g_blockObjs[0].x >= 0)
    {
        g_moveLevelRight = false
    }
    if(g_blockObjs[g_columns-1].x<= g_canvasWidth)
    {
        g_moveLevelLeft = false
    }
}

function f_ImportImages()
{
    g_doorImg.src = 'assets\\door.png'
    g_diamonds.src = 'assets\\diamonds.png'
    g_redDiamond.src = 'assets\\redDiamonds.png'
    g_explosion1.src = 'assets\\explosion1.png'
    g_explosion2.src = 'assets\\explosion2.png'
    g_gunImg.src = 'assets\\gun.png'
    g_gunTextImg.src = 'assets\\gunText.png'
    g_livesImg.src = 'assets\\lives.png'
    g_monsterImg.src = 'assets\\monster.png'
    g_monsterBulletImg.src = 'assets\\monsterbullet.png'
    g_purTileImg.src = 'assets\\platformTile.png'
    g_redTileImg.src = 'assets\\redTile.png'
    g_scoreText.src = 'assets\\score.png'
    g_sphereImg.src = 'assets\\sphere.png'

    for(i=0;i<g_numberImages.length;i++)
    {
        g_numberImages[i] = new Image()
        g_numberImages[i].src = 'assets\\'+i+'.png'
    }
    for(i=0;i<g_cupImgs.length;i++)
    {
        g_cupImgs[i] = new Image()
        g_cupImgs[i].src = 'assets\\cup'+(i+1)+'.png'
    }
    for(i=0;i<g_daveImgs.length;i++)
    {
        g_daveImgs[i] = new Image()
        g_daveImgs[i].src = 'assets\\dave'+(i+1)+'.png'
    }
    for(i=0;i<g_fireImgs.length;i++)
    {
        g_fireImgs[i] = new Image()
        g_fireImgs[i].src = 'assets\\fire'+(i+1)+'.png'
    }
    for(i=0;i<g_waterImgs.length;i++)
    {
        g_waterImgs[i] = new Image()
        g_waterImgs[i].src = 'assets\\water'+(i+1)+'.png'
    }
    for(i=0;i<g_weedImgs.length;i++)
    {
        g_weedImgs[i] = new Image()
        g_weedImgs[i].src = 'assets\\weed'+(i+1)+'.png'
    }
}
function c_dave(l_x,l_y,l_w,l_h,l_imgArray)
{
    this.x = l_x
    this.y = l_y
    this.w = l_w
    this.h = l_h
    this.imgs = l_imgArray
    this.moveLeft = false
    this.moveRight = false
    this.moveUp = false
    this.moveDown = false
    this.isAlive = true
    this.moveSpeedX = 0
    this.moveSpeedY = 0
    this.move = true
    this.gravity = 1
    this.velocity = 0
    this.movingDown = false
    this.movingUp = false
    this.inAir = false
    this.hasKey = false
    this.hasGun = false
    this.shoot = false
    this.bulletSpeed = 10
    this.direction;
    
    this.m_draw = function m_draw(l_ctx,l_imgNum)
    {
        if(this.isAlive)l_ctx.drawImage(this.imgs[parseInt(l_imgNum)],this.x,this.y,this.w,this.h);
    }
    this.m_gravity = function m_gravity()
    {
        this.y += this.velocity
        this.velocity += this.gravity
        this.movingDown = true
    }
}

function c_bullet(l_x,l_y,l_w,l_h,l_img)
{
    this.x = l_x
    this.y = l_y
    this.w = l_w
    this.h = l_h
    this.speed = 0
    this.img = l_img
    this.isAlive = false

    this.m_draw = function m_draw(l_ctx)
    {
        if(this.isAlive) l_ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
    }
    this.m_move = function m_move()
    {
        if(this.isAlive) this.x += this.speed
    }
}
function f_fireDaveBullet()
{
    if(!g_Davebullet.isAlive && g_daveObj.shoot && g_daveObj.hasGun)
    {
        g_daveObj.shoot = false
        g_Davebullet.isAlive = true
        g_Davebullet.x = g_daveObj.x
        g_Davebullet.y = g_daveObj.y

        if(g_daveObj.direction == "r")
        {
            g_Davebullet.speed = 10
        }
        if(g_daveObj.direction == "l")
        {
            g_Davebullet.speed = -10
        }

    }
}
function f_fireMonsterBullet()
{
    if(g_monsterObj.y >= 150 && g_monsterObj.y <= 200)
    {
        if(!g_monsterBullet) g_monsterObj.shoot = true
    }
    if(g_monsterObj.shoot)
    {
        if(g_daveObj.x < g_monsterObj.x)
        {
            g_monsterBullet.speed = -10
        }
        if(g_daveObj.x > g_monsterObj.x)
        {
            g_monsterBullet.speed = -10
        }

    }
}

function f_checkCollisionBetweenDaveAndBlocks(l_Direction)
{
    for(l=0;l<g_blockObjs.length;l++)
    {
        if(g_blockObjs[l]&&g_blockObjs[l].isAlive)
        {
            if(l_Direction == "d")
            {
                if(((g_daveObj.y+g_daveObj.h) > g_blockObjs[l].y) && 
                ((g_daveObj.y+g_daveObj.h) < g_blockObjs[l].y+g_blockObjs[l].h) && 
                ((g_daveObj.x+g_daveObj.w) > g_blockObjs[l].x) &&
                (((g_daveObj.x + g_daveObj.w)< (g_blockObjs[l].x +g_blockObjs[l].w)) || 
                (g_daveObj.x < (g_blockObjs[l].x + g_blockObjs[l].w))&& 
                (g_daveObj.x > g_blockObjs[l].x)))
                {
                    if(g_blockObjs[l].type == 1||g_blockObjs[l].type == 6||g_blockObjs[l].type == 7||g_blockObjs[l].type == 8||g_blockObjs[l].type == 9)
                    {     
                        g_daveObj.y = g_blockObjs[l].y - g_daveObj.h
                        g_daveObj.velocity = 0
                        g_daveObj.inAir = false

                        if(g_blockObjs[l].type == 7||g_blockObjs[l].type == 8||g_blockObjs[l].type == 9)
                        {
                            g_daveObj.isAlive = false
                        }
                    }
                    if(g_blockObjs[l].type == 2||g_blockObjs[l].type == 3||g_blockObjs[l].type == 4||g_blockObjs[l].type == 10||g_blockObjs[l].type == 11)
                    {
                        g_blockObjs[l].isAlive = false

                        if(g_blockObjs[l].type == 10)
                        {
                            g_daveObj.hasKey = true
                        }
                        if(g_blockObjs[l].type == 11)
                        {
                            g_daveObj.hasGun = true
                        }
                    }
                    if(g_blockObjs[l].type == 5)
                    {
                        if(g_daveObj.hasKey)g_gameOver = true;
                    }
                    break
                }
            }
            if(l_Direction == "u")
            {   
                if((g_daveObj.y < (g_blockObjs[l].y+g_blockObjs[l].h)) &&
                (g_daveObj.y > g_blockObjs[l].y) && ((g_daveObj.x+g_daveObj.w) > g_blockObjs[l].x) && 
                (((g_daveObj.x + g_daveObj.w)< (g_blockObjs[l].x +g_blockObjs[l].w)) || 
                (g_daveObj.x < (g_blockObjs[l].x + g_blockObjs[l].w))&& 
                (g_daveObj.x > g_blockObjs[l].x)))
                { 
                    if(g_blockObjs[l].type == 1||g_blockObjs[l].type == 6||g_blockObjs[l].type == 7||g_blockObjs[l].type == 8||g_blockObjs[l].type == 9)
                    {    
                        g_daveObj.velocity = - g_daveObj.velocity
                        g_daveObj.y = g_blockObjs[l].y + g_blockObjs[l].h
                    }
                    if(g_blockObjs[l].type == 2||g_blockObjs[l].type == 3||g_blockObjs[l].type == 4||g_blockObjs[l].type == 10||g_blockObjs[l].type == 11)
                    {
                        g_blockObjs[l].isAlive = false

                        if(g_blockObjs[l].type == 10)
                        {
                            g_daveObj.hasKey = true
                        }
                        if(g_blockObjs[l].type == 11)
                        {
                            g_daveObj.hasGun = true
                        }
                    }
                    if(g_blockObjs[l].type == 5)
                    {
                        if(g_daveObj.hasKey)g_gameOver = true;
                    }
                    break
                }
            }
            if(l_Direction == "l")
            {    
                if((g_daveObj.x < (g_blockObjs[l].x+g_blockObjs[l].w))&& 
                (g_daveObj.x > g_blockObjs[l].x) && 
                ((g_daveObj.y+g_daveObj.h) > g_blockObjs[l].y) && 
                (((g_daveObj.y + g_daveObj.h)< g_blockObjs[l].y +g_blockObjs[l].h)||
                (g_daveObj.y < (g_blockObjs[l].y + g_blockObjs[l].h)) && 
                (g_daveObj.y > g_blockObjs[l].y)))
                {
                    if(g_blockObjs[l].type == 1||g_blockObjs[l].type == 6||g_blockObjs[l].type == 7||g_blockObjs[l].type == 8||g_blockObjs[l].type == 9)
                    {    
                        g_daveObj.x = g_blockObjs[l].x + g_blockObjs[l].w
                    }
                    if(g_blockObjs[l].type == 2||g_blockObjs[l].type == 3||g_blockObjs[l].type == 4||g_blockObjs[l].type == 10||g_blockObjs[l].type == 11)
                    {
                        g_blockObjs[l].isAlive = false

                        if(g_blockObjs[l].type == 10)
                        {
                            g_daveObj.hasKey = true
                        }
                        if(g_blockObjs[l].type == 11)
                        {
                            g_daveObj.hasGun = true
                        }
                    }
                    if(g_blockObjs[l].type == 5)
                    {
                        if(g_daveObj.hasKey)g_gameOver = true;
                    }
                    break
                }
            }
            if(l_Direction == "r")
            {    
                if(((g_daveObj.x+g_daveObj.w) > g_blockObjs[l].x) && 
                ((g_daveObj.x+g_daveObj.w) <  (g_blockObjs[l].x+g_blockObjs[l].w)) && 
                ((g_daveObj.y+g_daveObj.h) > g_blockObjs[l].y)&& 
                (((g_daveObj.y + g_daveObj.h)< (g_blockObjs[l].y +g_blockObjs[l].h)) || 
                (g_daveObj.y < (g_blockObjs[l].y + g_blockObjs[l].h)) && 
                (g_daveObj.y > g_blockObjs[l].y)))            
                {
                    if(g_blockObjs[l].type == 1||g_blockObjs[l].type == 6||g_blockObjs[l].type == 7||g_blockObjs[l].type == 8||g_blockObjs[l].type == 9)
                    {     
                        g_daveObj.x = g_blockObjs[l].x  - g_daveObj.w ;
                    }
                    if(g_blockObjs[l].type == 2||g_blockObjs[l].type == 3||g_blockObjs[l].type == 4||g_blockObjs[l].type == 10||g_blockObjs[l].type == 11)
                    {
                        g_blockObjs[l].isAlive = false

                        if(g_blockObjs[l].type == 10)
                        {
                            g_daveObj.hasKey = true
                        }
                        if(g_blockObjs[l].type == 11)
                        {
                            g_daveObj.hasGun = true
                        }
                    }
                    if(g_blockObjs[l].type == 5)
                    {
                        if(g_daveObj.hasKey)g_gameOver = true;
                    }
                    break;
                }
            }
        }
    }
} 

function c_monster(l_x,l_y,l_w,l_h,l_pathStrtX,l_pathStrtY,l_pathW,l_pathH,l_img)
{
    this.x = l_x
    this.y = l_y
    this.w = l_w
    this.h = l_h
    this.pathStartX = l_pathStrtX
    this.pathStartY = l_pathStrtY
    this.pathW = l_pathW
    this.pathH = l_pathH
    this.img = l_img
    this.isAlive = true
    this.speedAccLvlX = 0
    this.speedX = 0
    this.speedY = 0
    this.speed = 5
    this.shoot = false

    this.m_draw = function m_draw(l_ctx)
    {
        if(this.isAlive)l_ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
    }

    this.m_moveAccLevel = function m_moveAccLevel(l_L,l_R,l_speed)
    {
        if(this.isAlive)
        { 
            if(l_L)
            {
               this.speedAccLvlX = -l_speed
            }
            if(l_R)
            {
               this.speedAccLvlX = l_speed
            }
            this.x += this.speedAccLvlX
            this.pathStartX += this.speedAccLvlX
            this.speedAccLvlX = 0
        }
    }
    this.m_moveAccPath = function m_moveAccPath()
    {
        if(this.isAlive)
        {

            if(this.x <= this.pathStartX && this.y >= this.pathStartY )
            {
                this.speedX = this.speed
                this.speedY = 0
            }
            if(this.x >= this.pathStartX + this.pathW && this.y >= this.pathStartY)
            {
                this.speedX = 0
                this.speedY = -this.speed
            }
            if(this.x >= this.pathStartX + this.pathW && this.y <= this.pathStartY - this.pathH)
            {
                this.speedX = - this.speed
                this.speedY = 0
            }
            if(this.x <= this.pathStartX && this.y <= this.pathStartY - this.pathH)
            {
                this.speedX = 0
                this.speedY = this.speed
            }
            this.x += this.speedX
            this.y += this.speedY
        }
    }
}
function f_animateDave()
{
    g_daveAnimation = 0
    if(!(g_rightKeyPressed&& g_leftKeyPressed))
    {
        if(g_daveObj.direction == "r") g_daveAnimation = 1
        if(g_daveObj.direction == 'l') g_daveAnimation = 4
    }

    if(g_rightKeyPressed)
    {
        if(g_daveAnimationState)
        {
            g_daveAnimation = 2
        }
        else 
        {
            g_daveAnimation = 0
        }
    }
    if(g_leftKeyPressed)
    {
        if(g_daveAnimationState)
        {
            g_daveAnimation = 5
        }
        else 
        {
            g_daveAnimation = 4
        }
    }
}
function f_checkIfDaveBulletIsAlive()
{
     for(l=0;l<g_blockObjs.length;l++)
     {
        if(g_blockObjs[l] && g_Davebullet.isAlive )
        {
            if(g_Davebullet.x > g_blockObjs[l].x && 
                g_Davebullet.x <  g_blockObjs[l].x+g_blockObjs[l].w && 
                g_Davebullet.y > g_blockObjs[l].y&& 
                g_Davebullet.y < g_blockObjs[l].y +g_blockObjs[l].h)
             {
                if(g_blockObjs[l].type == 1||g_blockObjs[l].type == 6||g_blockObjs[l].type == 7||g_blockObjs[l].type == 8||g_blockObjs[l].type == 9)
                {     
                    g_Davebullet.isAlive = false
                }
                break;
             }
        }
    }
}
function f_checkIfMonsterBulletISAlive()
{
    for(l=0;l<g_blockObjs.length;l++)
    {
        if(g_blockObjs[l] && g_monsterBullet.isAlive )
        {
            if(g_monsterBullet.x > g_blockObjs[l].x && 
                g_monsterBullet.x <  g_blockObjs[l].x+g_blockObjs[l].w && 
                g_monsterBullet.y > g_blockObjs[l].y&& 
                g_monsterBullet.y < g_blockObjs[l].y +g_blockObjs[l].h)
                {
                    if(g_blockObjs[l].type == 1||g_blockObjs[l].type == 6||g_blockObjs[l].type == 7||g_blockObjs[l].type == 8||g_blockObjs[l].type == 9)
                    {     
                        g_monsterBullet.isAlive = false
                    }
                    break;
                }
         }
    }
}
function f_checkMonsterAlive()
{
     if(g_monsterObj.isAlive && (g_Davebullet.x > g_monsterObj.x && 
        g_Davebullet.x <  g_monsterObj.x+g_monsterObj.w && 
        g_Davebullet.y > g_monsterObj.y&& 
        g_Davebullet.y < g_monsterObj.y + g_monsterObj.h))
        {
            g_Davebullet.isAlive = false
            g_monsterObj.isAlive = false
        }
    if( g_monsterObj.isAlive && (g_daveObj.x + g_daveObj.w > g_monsterObj.x &&
       g_daveObj.x < g_monsterObj.x + g_monsterObj.w &&
       g_daveObj.y + g_daveObj.h > g_monsterObj.y &&
       g_daveObj.y < g_monsterObj.y + g_monsterObj.h) )
        {
            g_monsterObj.isAlive = false
            g_daveObj.isAlive = false
        }
}
function f_respawnDave()
{
    if(!g_daveObj.isAlive) 
    {                   
       f_initialise(); 
    }
}
var g_animate = false

function f_printGameOver()
{
    if(g_gameOver)
    {
        f_clearCanvas()
        g_context.font = "30px Arial"
        g_context.fillStyle = "white"
        g_context.fillText("You Won",g_canvasWidth/2-100,g_canvasHeight/2)
    }
}

function f_frameCounter()
{
    g_frame++
    g_animate = false

    if(!(g_frame % 5))
    {
        g_animate = true
        g_daveAnimationState = ! g_daveAnimationState
    }
}
function f_gameLoop() 
{
    f_respawnDave()
    g_daveObj.m_gravity()
    f_moveDave()
    f_levelMovementFlagsHandler()
    f_checkIfDaveBulletIsAlive()
    f_checkMonsterAlive()
    f_fireMonsterBullet()
    f_checkIfMonsterBulletISAlive()
    f_fireDaveBullet()
    g_Davebullet.m_move()
    g_monsterBullet.m_move()
    g_monsterObj.m_moveAccLevel(g_moveLevelLeft,g_moveLevelRight,g_speed)
    g_monsterObj.m_moveAccPath()
    f_frameCounter()
    f_moveLevel()
    f_animateBlocks()
    f_animateDave()
    f_clearCanvas()
    f_drawImgs()
    g_daveObj.m_draw(g_context,g_daveAnimation)
    g_monsterObj.m_draw(g_context)
    g_Davebullet.m_draw(g_context)
    g_monsterBullet.m_draw(g_context)
    f_printGameOver();
}
function f_initialise()
{
    f_ImportImages()
    f_createBlocks()
    g_daveObj = new c_dave(110,100,g_daveWidth,g_daveHeight,g_daveImgs)
    g_monsterObj = new c_monster(g_blockObjs[130].x-25,g_blockObjs[130].y-50,50,50,g_blockObjs[130].x-25,g_blockObjs[130].y-50,225,125,g_monsterImg)
    g_Davebullet = new c_bullet(g_daveObj.x,g_daveObj.y,10,10,g_monsterBulletImg)
    g_monsterBullet = new c_bullet(g_monsterObj.x,g_monsterObj.y,20,20,g_monsterBulletImg)
}

f_initialise()
setInterval(f_gameLoop, g_timeInterval)

document.addEventListener("keydown",f_keydownEventHandler)
document.addEventListener("keyup",f_keyUpEventHandler)

function f_keydownEventHandler(l_event)
{
    switch(l_event.keyCode)
    {
        case 38: 
            l_event.preventDefault();
            g_upKeyPressed= true                            
            break;
            
        case 39:   
             l_event.preventDefault();
            g_rightKeyPressed = true
            break;
            
        case 37:
            l_event.preventDefault();
            g_leftKeyPressed= true
            break;
            
        case 32: 
            l_event.preventDefault();
            g_daveObj.shoot = true
            break;
        case 40:
             l_event.preventDefault();
            break;
    }
}
function f_keyUpEventHandler(l_event)
{
    switch(l_event.keyCode)
    {
        case 32:
            l_event.preventDefault();
            g_daveObj.shoot = false
            break;
            
        case 38: 
            l_event.preventDefault();
            g_upKeyPressed = false
            break;
            
        case 39: 
            l_event.preventDefault();
            g_rightKeyPressed = false
            break;
            
        case 37: 
            l_event.preventDefault();
            g_leftKeyPressed = false
            break;
        case 40:
             l_event.preventDefault();
            break;
     }
}
