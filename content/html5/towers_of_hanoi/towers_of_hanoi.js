       
    function C_Rect(l_x,l_y,l_w,l_h,l_c)
    {
        this.x = l_x;
        this.y = l_y;
        this.w = l_w;
        this.h = l_h;
        this.c = l_c;        

        this.m_draw = function m_draw(l_Ctx)
        {
           l_Ctx.fillStyle = this.c; l_Ctx.fillRect(this.x,this.y,this.w,this.h);
        }
    }

    function C_Stack(l_x,l_y,l_w,l_h,l_c)
    {
        this.x = l_x;
        this.y = l_y;
        this.w = l_w;
        this.h = l_h;
        this.c = l_c;
        this.PoppedObj;  

        this.StackArray = new Array(5);
        this.YposArray = new Array(5);
        this.StackArrayIndex = 0;

        this.m_UpdateDiskPos = function m_UpdateDiskPos(l_DiskHeight)
        {
            for(i=0;i<this.StackArray.length;i++)
            {
                this.YposArray[i] = this.y - l_DiskHeight*(i+1);
            }
        }

        this.m_Push = function m_Push(l_Obj)
        {
            this.StackArray[this.StackArrayIndex] = l_Obj;
            this.StackArray[this.StackArrayIndex].y = this.YposArray[this.StackArrayIndex];

            this.StackArray[this.StackArrayIndex].x = this.x+(185-l_Obj.w)/3;
            this.StackArrayIndex++;

        };

        this.m_Pop = function m_Pop()
        {
            this.StackArrayIndex--;
            this.PoppedObj = this.StackArray[this.StackArrayIndex];
            this.StackArray[this.StackArrayIndex] = null;
            return this.PoppedObj;
        };

        this.m_drawTower = function m_drawTower(l_Ctx)
        {               
            l_Ctx.fillStyle = this.c;            
            l_Ctx.fillRect(this.x,this.y,this.w,10);
            l_Ctx.fillRect(this.x+(this.w/2)-5,this.y,10,-this.h);
        }   
    }
    function f_IdentifyTower(l_x,l_y)
    {
        l_x -= g_canvasBounds.left;
        l_y -= g_canvasBounds.top;
        
        if(l_x > g_Tower_1.x && l_x < (g_Tower_1.x+g_Tower_1.w) )
        {
            if(g_TempObj ==  null&& g_Tower_1.StackArrayIndex !=0)
            {
                g_TempObj = g_Tower_1.m_Pop();

            }
            else if(g_TempObj != null)
            {
                if(g_Tower_1.StackArrayIndex >=1 )
                {
                    if(g_TempObj.w<g_Tower_1.StackArray[g_Tower_1.StackArrayIndex-1].w)
                    {
                        g_Tower_1.m_Push(g_TempObj);
                        g_TempObj = null;
                        g_numberOfMoves++;
                    }                                        
                }
                else
                {                                
                    g_Tower_1.m_Push(g_TempObj);
                    g_TempObj = null;
                    g_numberOfMoves++;
                }
            }
        }
        else if(l_x > g_Tower_2.x && l_x < (g_Tower_2.x+g_Tower_2.w) )
        {
            if(g_TempObj ==  null&& g_Tower_2.StackArrayIndex !=0)
            {
                g_TempObj = g_Tower_2.m_Pop();
            }
            else if(g_TempObj != null)
            {
                if(g_Tower_2.StackArrayIndex >=1 )
                {
                    if(g_TempObj.w<g_Tower_2.StackArray[g_Tower_2.StackArrayIndex-1].w)
                    {
                        g_Tower_2.m_Push(g_TempObj);
                        g_TempObj = null;
                        g_numberOfMoves++;
                    }                                        
                }                
                else
                {                                
                    g_Tower_2.m_Push(g_TempObj);
                    g_TempObj = null;
                    g_numberOfMoves++;
                }
            }
        }

        else if(l_x > g_Tower_3.x && l_x < (g_Tower_3.x+g_Tower_3.w) )
        {
            if(g_TempObj == null && g_Tower_3.StackArrayIndex !=0)
            {
                g_TempObj = g_Tower_3.m_Pop();
            }
            else if(g_TempObj != null)
            {
                if(g_Tower_3.StackArrayIndex >=1 )
                {
                    if(g_TempObj.w<g_Tower_3.StackArray[g_Tower_3.StackArrayIndex-1].w)
                    {
                        g_Tower_3.m_Push(g_TempObj);
                        g_TempObj = null;
                        g_numberOfMoves++;
                    }                                        
                }
                else
                {                                
                    g_Tower_3.m_Push(g_TempObj);
                    g_TempObj = null;
                    g_numberOfMoves++;
                }
            }
        }
    }

    function f_movesPrinter()
    {
        var l_moves = "";
        g_Context.font = '30px Arial';
        g_Context.fillStyle ="black"
        l_moves = "Moves : "+g_numberOfMoves;
        g_Context.fillText(l_moves,50,50)
        
        if(g_winFlag ==1)
        {
            f_ClearCanvas();
            g_Context.fillStyle = "green"
            g_Context.fillText("You Won",g_Canvas.width/2 - 50,g_Canvas.height/2);
            g_Context.fillText(l_moves ,g_Canvas.width/2 - 50,g_Canvas.height/2+50);
        }
    }

    function f_WinDetector()
    {
        if(g_Tower_3.StackArrayIndex==3)
        {                 
            if(g_Tower_3.StackArray[0].w==g_Disk_1.w)
            {
                 if(g_Tower_3.StackArray[1].w==g_Disk_2.w)
                 {
                      if(g_Tower_3.StackArray[2].w==g_Disk_3.w)
                      {
                          g_winFlag =1;
                      }
                 }
            }
        }
        f_ClearCanvas();
    }

    function f_ClearCanvas()
    {
       g_Context.clearRect(0,0,g_Canvas.width,g_Canvas.height);
       g_Context.strokeRect(0,0,g_Canvas.width,g_Canvas.height);    
    }

    function f_GameLoop()
    {
        f_WinDetector();
        f_ClearCanvas();
        g_Tower_1.m_drawTower(g_Context);
        g_Tower_2.m_drawTower(g_Context);
        g_Tower_3.m_drawTower(g_Context);
        g_Disk_1.m_draw(g_Context);
        g_Disk_2.m_draw(g_Context);
        g_Disk_3.m_draw(g_Context);            
        f_movesPrinter()
    }

    var g_Canvas = document.getElementById("myCanvas");
    var g_Context = g_Canvas.getContext("2d");
    var g_canvasBounds = g_Canvas.getBoundingClientRect();
    var g_FPS = 30;
    var g_TimeInterval = 1000/g_FPS;
    var g_numberOfMoves = 0;
    var g_winFlag = 0;         
    var g_TempObj = null;    
    var g_Tower_1 = new C_Stack(50,400,150,200,"black");        
    var g_Tower_2 = new C_Stack(250,400,150,200,"black");    
    var g_Tower_3 = new C_Stack(450,400,150,200,"black");
    var g_Disk_1 = new C_Rect(100,100,100,10,"red");
    var g_Disk_2 = new C_Rect(100,100,80,10,"blue");
    var g_Disk_3 = new C_Rect(100,100,60,10,"orange");
    var g_canvasOffsetX = 135;
    var g_canvasOffsetY = 140;
    g_Tower_1.m_UpdateDiskPos(10);
    g_Tower_2.m_UpdateDiskPos(10);    
    g_Tower_3.m_UpdateDiskPos(10);       
    g_Tower_1.m_Push(g_Disk_1);
    g_Tower_1.m_Push(g_Disk_2);
    g_Tower_1.m_Push(g_Disk_3);

    setInterval(f_GameLoop,g_TimeInterval);        
    document.addEventListener("click",f_ClickEventHandler);

    function f_ClickEventHandler(l_Event)
    {
        f_IdentifyTower(l_Event.clientX,l_Event.clientY);
    }