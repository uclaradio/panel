# Panel: UCLA Radio's Internal Management System

<!-- TOC -->

* [Panel: UCLA Radio's Internal Management System](#panel-ucla-radios-internal-management-system)
  * [Overview](#overview)
  * [Users](#users)
  * [Complete Feature List](#complete-feature-list)
  * [Flowchart](#flowchart)
  * [Screen by Screen Specification](#screen-by-screen-specification)

<!-- /TOC -->

## Overview

Panel is a web service that serves as UCLA Radio's main internal information tracking and management site. Panel will contain what is currently known as [uclaradio.com/panel](https://uclaradio.com/panel) and [uclaradio.com/pages](https://uclaradio.com/pages).

**Note**: This spec is not complete and is constantly being revised.

## Users

All users of Panel should be current active members of UCLA Radio. However, within that category, there are a couple different types of UCLA Radio members:

1. **Interns** are members of Radio who have just joined. They don't have shows, but need access to all radio internal forms and music library.
2. **DJs** are members of Radio who have a current show. They need to be able to access all internal radio knowledge, as well as create and update information about their show.
3. **Managers** are the members of Radio who lead a department. They should be able to update their respective department's information and links.
4. **Admins** should be able to update any show, department information, moderate chats. The current web manager(s), assistant general manager, and the general manager should all be admins.

## Complete Feature List
Breakdown of features for Panel and Pages based on user type: 

### Panel
All:
* Request an Account
* Password Reset
* User Profile
* Access to Pages

DJs:
* Create/Delete a Show

Managers:
* Update/Add Links to Pages
* Manager Profile
* Set Show of the Week
* Approve/Reject Account Requests

Admins:
* Manage all users
* Manage all shows
* Set Promo Banner images
* Moderate chat

### Pages
All:
* View station bylaws
* Submit a sub request
* Submit a photo/video request
* Submit an ISP
* View all sub requests
* Request a press pass
* Sign up for roster
* Archive
* Nominate a show of the month
* Elrond

DJs:
* Submit NMFs (Only available to DJs)
* Request a graphic for your show
* Request a theme song for your show

Managers:
* Pass/Fail Roster List

## Flowchart

## Screen by Screen Specification

### Login Page
The login page should be the page that anyone is redirected to if they are not authenticated and try to access any page of Panel.

### Account Creation
* Full Name
* Username
* Email
* Password

### Password Reset

### Pages
A list of links with a title and description for each link. Ideally this list is searchable and sortable. If the user is a Manager/Admin, they should be able to add links to this page. 

### User Page
A user can edit the following information about themself: 
* Image
* Full Name
* DJ Name
* Phone Number
* Bio
* Social Media Links

### Show Page
The page for DJs to manage shows they host or co-host. They have the option to Create a Show or Delete a Show. Their shows list will contain shows they created or were added to as a Co-Host/Co-DJ. 

Selecting a show from their show list allows them to edit the following details about the show: 
* Image
* Show Name
* Show Time
* DJ(s)
* Show Info
* Social Media Links

### Admin Page
The main admin page will be a collection of panels that appear based on the User type. 

As a manager, you will only see the following panels:
* Manager Info
* Select Show of the Week
* Approve/Reject Account Requests

As an admin, you will see the panels above AND:
* Keep/Delete Chat Messages
* Promo Banner Images

### Admin Subpage - All Users
This subpage is only visible to Admins. The page displays all users in a table format and allows Admins to modify/delete users information.

### Admin Subpage - All Shows
This subpage is only visible to Admins. The page displays all shows in a list and allows them to edit each show in a similar fashion to the Show Page. 
