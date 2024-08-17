/**
 * @swagger
 * /api/signup:
 *   post:
 *     summary: Create a new user
 *     tags:
 *     - User
 *     description: Use to request signup
 *     requestBody:
 *       required: true
 *       content:
 *         application/json: 
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: Userpassword123
 *     responses:
 *        '201':
 *           description: A successful response
 *           content: 
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: User created !
 *        '400':
 *           description: Bad request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: The email address provided is already in use.
 *        '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: An error occurred
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Log in a user
 *     tags:
 *      - User
 *     description: Use to request login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json: 
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: Userpassword123
 *     responses:
 *        '200':
 *           description: A successful response
 *           content: 
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   token:
 *                     type: string
 *                     description: The JWT token.
 *        '400':
 *           description: Bad request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Invalid email or password.
 *        '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: An error occurred
 */

/**
 * @swagger
 * /api/getBookmarks:
 *   get:
 *     summary: Get bookmarks by user ID
 *     tags:
 *     - Bookmarks
 *     description: Retrieve all bookmarks for the authenticated user.
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of bookmarks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The ID of the bookmark.
 *                   userId:
 *                     type: string
 *                     description: The ID of the user.
 *                   movieId:
 *                     type: string
 *                     description: The ID of the bookmarked media.
 *                   mediaType:
 *                     type: string
 *                     description: The type of media (e.g., movie, TV show).
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: The date the bookmark was created.
 *       401:
 *         description: User not authenticated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: User not authenticated
 *       400:
 *         description: Bad request, unable to retrieve bookmarks.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: Unable to retrieve bookmarks from the database
 */

/**
 * @swagger
 * /api/addBookmarks:
 *   get:
 *     summary: Add or remove a bookmark
 *     tags:
 *     - Bookmarks
 *     description: Adds a bookmark if it doesn't exist, otherwise removes it.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idMedia:
 *                 type: string
 *                 description: The ID of the media to bookmark.
 *                 example: 123456
 *               mediaType:
 *                 type: string
 *                 description: The type of media (e.g., movie, TV).
 *                 example: movie
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Bookmark added or removed successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The ID of the bookmark.
 *                   userId:
 *                     type: string
 *                     description: The ID of the user.
 *                   movieId:
 *                     type: string
 *                     description: The ID of the bookmarked media.
 *                   mediaType:
 *                     type: string
 *                     description: The type of media (e.g., movie, TV show).
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: The date the bookmark was created.
 *       401:
 *         description: User not authenticated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: User not authenticated
 *       400:
 *         description: Bad request, unable to retrieve bookmarks.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: Unable to retrieve bookmarks from the database
 */