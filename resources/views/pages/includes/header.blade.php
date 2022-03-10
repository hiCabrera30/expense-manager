<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="/">PurpleBug</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Expense Categories</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Expenses</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Users
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="{{ route("admins.index") }}">Admins</a>
                        <a class="dropdown-item" href="{{ route("general-users.index") }}">General Users</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-danger" href="/logout">Logout</a>
                </li>
            </ul>
        </div>
    </div>
</nav>