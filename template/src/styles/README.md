# Style Documentation

####Notes: Be careful when you add any new styles to this folder. Check if there is already styles you need before you add a new one

Our style boilerplate is heavily inspired by bootsrap
We have 4 main folders:
1. **Mixin**
    contains all of our functions and mixins
2. **Modules**
    contains all of modules/component. Since we dont have *scss component* anymore, this folder only contains modules/components we need globally, like fonts-family, headings, etc
3. **Partials**
    contains variables and normalize
4. **Utilities**
    contains utils-based class

There is some important point that we should know
1. Grid
    We have 6 breakpoints: `xtrasmall, small, smallmedium, medium, large, xtralarge`.
    For normal width grid:
    The pattern is: `col-#{$breakpoint}-#{columns}`
    ```
        <div className="container">
            <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6"></div>
            </div>
        </div>
    ```
    This will create 2 columns with 6-width-column from medium breakpoint up.


     For equal width grid:
     The pattern is: `col-#{$breakpoint}`
    ```
        <div className="container">
            <div className="row">
            <div className="col-md"></div>
            <div className="col-md"></div>
            </div>
        </div>
    ```
    This will create equal-width column from medium breakpoint up.

2. Margin and padding
    We have 6 level of size (start with index 0): `0, 5px, 10px, 15px, 20px, 30px and 40px` and 6 kind of margin/padding: `top(t), bottom(b), left(l), right(r), top-bottom(y), left-right(x)`.

    Margin is `m` and padding is `p`, so if you want to get:
    ```
    margin-top: 30px;
    margin-bottom: 30px;
    ```
    You can use `my-5`, or

    If you want to get `margin-right: 10px;`, just use `mr-2`


